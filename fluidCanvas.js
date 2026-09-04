/**
 * Viscous Blackish-Ash Neon Liquid Background Engine
 * Interactive Liquid Scoop Physics - Butter / Ice Cream Flow System
 * Fluid streams and deforms dynamically along the cursor path with millisecond viscous inertia.
 */

class ViscousLiquidCanvas {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    
    this.width = 0;
    this.height = 0;
    
    // Mouse tracking & viscous lerp state
    this.mouseX = window.innerWidth / 2;
    this.mouseY = window.innerHeight / 2;
    this.lastMouseX = this.mouseX;
    this.lastMouseY = this.mouseY;
    
    // Trailing fluid scoop position (millisecond delay / viscous inertia)
    this.trailX = this.mouseX;
    this.trailY = this.mouseY;
    this.velocity = 0;
    this.vx = 0;
    this.vy = 0;
    this.isMoving = false;
    this.moveTimeout = null;

    // Fluid Physics properties
    this.speedMultiplier = 1.0;
    this.targetSpeedMultiplier = 1.0;
    this.scrollTimeout = null;
    this.lastScrollY = window.scrollY;
    
    // Cursor trail history (object pool)
    this.trailPoints = [];
    this.maxTrailPoints = 32;

    // Liquid Waves
    this.waves = [
      { amplitude: 45, wavelength: 0.008, speed: 0.015, offset: 0, color: 'rgba(25, 25, 38, 0.88)' },
      { amplitude: 65, wavelength: 0.005, speed: 0.022, offset: 2.1, color: 'rgba(18, 18, 28, 0.92)' },
      { amplitude: 35, wavelength: 0.012, speed: 0.035, offset: 4.2, color: 'rgba(10, 10, 18, 0.96)' }
    ];

    // Neon liquid droplets/blobs
    this.droplets = [];
    this.numDroplets = 18;
    
    this.init();
  }

  init() {
    this.resize();
    window.addEventListener('resize', () => this.resize());
    window.addEventListener('scroll', () => this.handleScroll(), { passive: true });
    
    // Mouse movement listeners
    window.addEventListener('mousemove', (e) => this.handleMouseMove(e), { passive: true });
    window.addEventListener('touchmove', (e) => this.handleTouchMove(e), { passive: true });

    this.createDroplets();
    this.animate();
  }

  resize() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.canvas.width = this.width;
    this.canvas.height = this.height;
  }

  createDroplets() {
    this.droplets = [];
    for (let i = 0; i < this.numDroplets; i++) {
      this.droplets.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        radius: Math.random() * 70 + 25,
        baseRadius: Math.random() * 70 + 25,
        vx: (Math.random() - 0.5) * 1.0,
        vy: (Math.random() - 0.5) * 1.0,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 0.03 + 0.01,
        glowColor: i % 3 === 0 
          ? 'rgba(160, 224, 255, 0.18)' 
          : i % 3 === 1 
          ? 'rgba(220, 200, 255, 0.14)' 
          : 'rgba(255, 255, 255, 0.10)'
      });
    }
  }

  handleMouseMove(e) {
    this.mouseX = e.clientX;
    this.mouseY = e.clientY;
    this.onCursorUpdate();
  }

  handleTouchMove(e) {
    if (e.touches.length > 0) {
      this.mouseX = e.touches[0].clientX;
      this.mouseY = e.touches[0].clientY;
      this.onCursorUpdate();
    }
  }

  onCursorUpdate() {
    const dx = this.mouseX - this.lastMouseX;
    const dy = this.mouseY - this.lastMouseY;
    this.vx = dx;
    this.vy = dy;
    this.velocity = Math.sqrt(dx * dx + dy * dy);
    
    this.lastMouseX = this.mouseX;
    this.lastMouseY = this.mouseY;
    
    this.isMoving = true;
    clearTimeout(this.moveTimeout);
    this.moveTimeout = setTimeout(() => {
      this.isMoving = false;
    }, 150);

    // Boost fluid wave speed slightly on fast mouse movement
    const boost = Math.min(this.velocity * 0.08, 4.0);
    this.targetSpeedMultiplier = 1.0 + boost;
  }

  handleScroll() {
    const currentScrollY = window.scrollY;
    const delta = Math.abs(currentScrollY - this.lastScrollY);
    this.lastScrollY = currentScrollY;

    const boost = Math.min(delta * 0.15, 6.0);
    this.targetSpeedMultiplier = 1.0 + boost;

    clearTimeout(this.scrollTimeout);
    this.scrollTimeout = setTimeout(() => {
      this.targetSpeedMultiplier = 1.0;
    }, 120);
  }

  updatePhysics() {
    // Viscous lerp trailing behind cursor (millisecond delay / butter scoop inertia)
    const lerpFactor = 0.14; // smooth viscous lag
    this.trailX += (this.mouseX - this.trailX) * lerpFactor;
    this.trailY += (this.mouseY - this.trailY) * lerpFactor;

    // Add trail point when cursor moves
    if (this.isMoving || Math.abs(this.mouseX - this.trailX) > 1) {
      const radius = Math.min(Math.max(this.velocity * 1.5, 25), 90);
      this.trailPoints.unshift({
        x: this.trailX,
        y: this.trailY,
        radius: radius,
        alpha: 0.85,
        vx: this.vx * 0.2,
        vy: this.vy * 0.2
      });

      if (this.trailPoints.length > this.maxTrailPoints) {
        this.trailPoints.pop();
      }
    }

    // Decay trail points
    for (let i = 0; i < this.trailPoints.length; i++) {
      const p = this.trailPoints[i];
      p.alpha *= 0.92;
      p.radius *= 0.97;
      p.x += p.vx;
      p.y += p.vy;
    }

    // Filter out invisible points
    this.trailPoints = this.trailPoints.filter(p => p.alpha > 0.02);

    // Smooth speed multiplier decay
    this.speedMultiplier += (this.targetSpeedMultiplier - this.speedMultiplier) * 0.1;
    if (!this.isMoving && this.targetSpeedMultiplier > 1.0) {
      this.targetSpeedMultiplier += (1.0 - this.targetSpeedMultiplier) * 0.05;
    }
  }

  animate() {
    this.updatePhysics();

    // Base background: Viscous deep ash black
    this.ctx.fillStyle = '#0a0a0f';
    this.ctx.fillRect(0, 0, this.width, this.height);

    // 1. Render Viscous Liquid Droplets (Drifting & Pulled by Cursor)
    for (let d of this.droplets) {
      // Viscous suction force towards trailing cursor position
      const dx = this.trailX - d.x;
      const dy = this.trailY - d.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < 280) {
        const pull = (1 - dist / 280) * 0.06;
        d.vx += dx * pull * 0.01;
        d.vy += dy * pull * 0.01;
      }

      // Damping
      d.vx *= 0.98;
      d.vy *= 0.98;

      d.x += (d.vx + (Math.random() - 0.5) * 0.3) * this.speedMultiplier;
      d.y += (d.vy + (Math.random() - 0.5) * 0.3) * this.speedMultiplier;
      d.pulse += d.pulseSpeed * this.speedMultiplier;

      // Wrap around edges smoothly
      if (d.x < -d.radius) d.x = this.width + d.radius;
      if (d.x > this.width + d.radius) d.x = -d.radius;
      if (d.y < -d.radius) d.y = this.height + d.radius;
      if (d.y > this.height + d.radius) d.y = -d.radius;

      const currentRadius = d.radius + Math.sin(d.pulse) * 10;

      const grad = this.ctx.createRadialGradient(
        d.x, d.y, currentRadius * 0.1,
        d.x, d.y, currentRadius
      );
      grad.addColorStop(0, d.glowColor);
      grad.addColorStop(0.5, 'rgba(20, 20, 32, 0.4)');
      grad.addColorStop(1, 'rgba(10, 10, 15, 0)');

      this.ctx.fillStyle = grad;
      this.ctx.beginPath();
      this.ctx.arc(d.x, d.y, currentRadius, 0, Math.PI * 2);
      this.ctx.fill();
    }

    // 2. Render Interactive Viscous Liquid Scoop Ribbon Trail (Butter / Ice Cream Scoop Effect)
    if (this.trailPoints.length > 1) {
      // Draw smooth viscous liquid ribbon connecting cursor trail points
      this.ctx.beginPath();
      this.ctx.moveTo(this.trailPoints[0].x, this.trailPoints[0].y);

      for (let i = 1; i < this.trailPoints.length - 1; i++) {
        const xc = (this.trailPoints[i].x + this.trailPoints[i + 1].x) / 2;
        const yc = (this.trailPoints[i].y + this.trailPoints[i + 1].y) / 2;
        this.ctx.quadraticCurveTo(this.trailPoints[i].x, this.trailPoints[i].y, xc, yc);
      }

      const headRadius = this.trailPoints[0].radius;
      this.ctx.lineWidth = headRadius * 1.2;
      this.ctx.lineCap = 'round';
      this.ctx.lineJoin = 'round';

      // Viscous specular liquid glow stroke
      const trailGrad = this.ctx.createLinearGradient(
        this.trailPoints[0].x, this.trailPoints[0].y,
        this.trailPoints[this.trailPoints.length - 1].x, this.trailPoints[this.trailPoints.length - 1].y
      );
      trailGrad.addColorStop(0, 'rgba(255, 255, 255, 0.22)');
      trailGrad.addColorStop(0.4, 'rgba(160, 224, 255, 0.14)');
      trailGrad.addColorStop(1, 'rgba(200, 160, 255, 0)');

      this.ctx.strokeStyle = trailGrad;
      this.ctx.stroke();

      // Specular liquid scoop core highlight
      for (let p of this.trailPoints) {
        if (p.alpha > 0.1) {
          const sg = this.ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius);
          sg.addColorStop(0, `rgba(255, 255, 255, ${p.alpha * 0.35})`);
          sg.addColorStop(0.5, `rgba(160, 224, 255, ${p.alpha * 0.15})`);
          sg.addColorStop(1, 'rgba(10, 10, 15, 0)');

          this.ctx.fillStyle = sg;
          this.ctx.beginPath();
          this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          this.ctx.fill();
        }
      }
    }

    // 3. Render Viscous Liquid Waves (Displaced by Cursor Position)
    for (let w of this.waves) {
      w.offset += w.speed * this.speedMultiplier;

      this.ctx.beginPath();
      this.ctx.moveTo(0, this.height);

      for (let x = 0; x <= this.width; x += 15) {
        // Wave base height
        let waveY = Math.sin(x * w.wavelength + w.offset) * w.amplitude + (this.height * 0.55);

        // Displace wave height dynamically based on cursor proximity (scooping wave effect)
        const dx = x - this.trailX;
        const dist = Math.abs(dx);
        if (dist < 260) {
          const pushFactor = (1 - dist / 260);
          const dy = this.trailY - (this.height * 0.55);
          waveY += Math.sin(dist * 0.03 - w.offset * 2) * pushFactor * (dy * 0.25);
        }

        if (x === 0) {
          this.ctx.moveTo(x, waveY);
        } else {
          this.ctx.lineTo(x, waveY);
        }
      }

      this.ctx.lineTo(this.width, this.height);
      this.ctx.lineTo(0, this.height);
      this.ctx.closePath();

      this.ctx.fillStyle = w.color;
      this.ctx.fill();

      // Specular liquid top edge shine
      this.ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
      this.ctx.lineWidth = 1.5;
      this.ctx.stroke();
    }

    // 4. Cursor Scoop Focal Point Specular Highlight Ring
    if (this.isMoving) {
      const fg = this.ctx.createRadialGradient(
        this.trailX, this.trailY, 0,
        this.trailX, this.trailY, 40
      );
      fg.addColorStop(0, 'rgba(255, 255, 255, 0.45)');
      fg.addColorStop(0.4, 'rgba(160, 224, 255, 0.20)');
      fg.addColorStop(1, 'rgba(255, 255, 255, 0)');

      this.ctx.fillStyle = fg;
      this.ctx.beginPath();
      this.ctx.arc(this.trailX, this.trailY, 40, 0, Math.PI * 2);
      this.ctx.fill();
    }

    requestAnimationFrame(() => this.animate());
  }
}

// Global initialization helper
window.initViscousCanvas = function(id) {
  return new ViscousLiquidCanvas(id);
};

