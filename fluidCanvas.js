/**
 * Viscous Blackish-Ash Neon Liquid Background Engine
 * Interactive Liquid Scoop Physics - Directional Flow & Reversal System
 * Liquid flows in cursor path within liquid flow area, instantly reversing flow on opposite movement.
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
    
    // Trailing fluid position (viscous inertia lerp)
    this.trailX = this.mouseX;
    this.trailY = this.mouseY;
    this.velocity = 0;
    this.vx = 0;
    this.vy = 0;
    this.flowVx = 0;
    this.flowVy = 0;
    this.isMoving = false;
    this.moveTimeout = null;

    // Fluid Physics properties
    this.speedMultiplier = 1.0;
    this.targetSpeedMultiplier = 1.0;
    this.scrollTimeout = null;
    this.lastScrollY = window.scrollY;
    
    // Sleek free-flowing trail history (max 14 points to prevent smudges)
    this.trailPoints = [];
    this.maxTrailPoints = 14;

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
        radius: Math.random() * 65 + 20,
        vx: (Math.random() - 0.5) * 0.9,
        vy: (Math.random() - 0.5) * 0.9,
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

    // Check if cursor is in the liquid flow area (y >= 20% height of page)
    const isInFlowArea = (this.mouseY >= this.height * 0.20);

    if (isInFlowArea) {
      // Detect direction reversal (moving opposite to current fluid flow)
      const dot = dx * this.flowVx + dy * this.flowVy;
      
      if (dot < -12) {
        // Cursor moved opposite to current flow direction inside flow area!
        // Instantly reverse fluid momentum & flush old trail to prevent smudgy bulky overlaps
        this.flowVx = dx;
        this.flowVy = dy;
        this.trailPoints = [];
      } else {
        // Smoothly blend flow momentum vector
        this.flowVx += (dx - this.flowVx) * 0.35;
        this.flowVy += (dy - this.flowVy) * 0.35;
      }

      this.isMoving = true;
      clearTimeout(this.moveTimeout);
      this.moveTimeout = setTimeout(() => {
        this.isMoving = false;
      }, 120);

      const boost = Math.min(this.velocity * 0.06, 3.5);
      this.targetSpeedMultiplier = 1.0 + boost;
    } else {
      // Outside flow area: damp momentum
      this.flowVx *= 0.5;
      this.flowVy *= 0.5;
      this.isMoving = false;
    }
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
    // Viscous lerp trailing behind cursor (millisecond delay)
    const lerpFactor = 0.18;
    this.trailX += (this.mouseX - this.trailX) * lerpFactor;
    this.trailY += (this.mouseY - this.trailY) * lerpFactor;

    const isInFlowArea = (this.mouseY >= this.height * 0.20);

    // Add trail points ONLY when moving inside the liquid flow area
    if (isInFlowArea && (this.isMoving || Math.abs(this.mouseX - this.trailX) > 2)) {
      const pointRadius = Math.min(Math.max(this.velocity * 0.6, 8), 24);
      this.trailPoints.unshift({
        x: this.trailX,
        y: this.trailY,
        radius: pointRadius,
        alpha: 0.9,
        vx: this.flowVx * 0.15,
        vy: this.flowVy * 0.15
      });

      if (this.trailPoints.length > this.maxTrailPoints) {
        this.trailPoints.pop();
      }
    }

    // Fast decay of trail points to keep stream crisp and free-flowing (no smudge)
    for (let i = 0; i < this.trailPoints.length; i++) {
      const p = this.trailPoints[i];
      p.alpha *= 0.83; // fast clean decay
      p.radius *= 0.96;
      p.x += p.vx;
      p.y += p.vy;
    }

    this.trailPoints = this.trailPoints.filter(p => p.alpha > 0.05);

    // Speed multiplier decay
    this.speedMultiplier += (this.targetSpeedMultiplier - this.speedMultiplier) * 0.1;
  }

  animate() {
    this.updatePhysics();

    // Base background: Viscous deep ash black
    this.ctx.fillStyle = '#0a0a0f';
    this.ctx.fillRect(0, 0, this.width, this.height);

    // 1. Render Viscous Droplets
    for (let d of this.droplets) {
      if (this.mouseY >= this.height * 0.20) {
        const dx = this.trailX - d.x;
        const dy = this.trailY - d.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 240) {
          const pull = (1 - dist / 240) * 0.05;
          d.vx += dx * pull * 0.01;
          d.vy += dy * pull * 0.01;
        }
      }

      d.vx *= 0.98;
      d.vy *= 0.98;

      d.x += (d.vx + (Math.random() - 0.5) * 0.2) * this.speedMultiplier;
      d.y += (d.vy + (Math.random() - 0.5) * 0.2) * this.speedMultiplier;
      d.pulse += d.pulseSpeed * this.speedMultiplier;

      if (d.x < -d.radius) d.x = this.width + d.radius;
      if (d.x > this.width + d.radius) d.x = -d.radius;
      if (d.y < -d.radius) d.y = this.height + d.radius;
      if (d.y > this.height + d.radius) d.y = -d.radius;

      const currentRadius = d.radius + Math.sin(d.pulse) * 8;

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

    // 2. Render Sleek Free-Flowing Liquid Stream (Applicable inside Flow Area, Zero Smudge)
    if (this.trailPoints.length > 1) {
      this.ctx.beginPath();
      this.ctx.moveTo(this.trailPoints[0].x, this.trailPoints[0].y);

      for (let i = 1; i < this.trailPoints.length - 1; i++) {
        const xc = (this.trailPoints[i].x + this.trailPoints[i + 1].x) / 2;
        const yc = (this.trailPoints[i].y + this.trailPoints[i + 1].y) / 2;
        this.ctx.quadraticCurveTo(this.trailPoints[i].x, this.trailPoints[i].y, xc, yc);
      }

      const headRadius = Math.max(this.trailPoints[0].radius, 10);
      this.ctx.lineWidth = headRadius * 0.9;
      this.ctx.lineCap = 'round';
      this.ctx.lineJoin = 'round';

      // Sleek non-smudgy neon liquid stroke
      const trailGrad = this.ctx.createLinearGradient(
        this.trailPoints[0].x, this.trailPoints[0].y,
        this.trailPoints[this.trailPoints.length - 1].x, this.trailPoints[this.trailPoints.length - 1].y
      );
      trailGrad.addColorStop(0, 'rgba(255, 255, 255, 0.40)');
      trailGrad.addColorStop(0.5, 'rgba(160, 224, 255, 0.20)');
      trailGrad.addColorStop(1, 'rgba(160, 224, 255, 0)');

      this.ctx.strokeStyle = trailGrad;
      this.ctx.stroke();
    }

    // 3. Render Viscous Liquid Waves
    for (let w of this.waves) {
      w.offset += w.speed * this.speedMultiplier;

      this.ctx.beginPath();
      this.ctx.moveTo(0, this.height);

      for (let x = 0; x <= this.width; x += 15) {
        let waveY = Math.sin(x * w.wavelength + w.offset) * w.amplitude + (this.height * 0.55);

        if (this.mouseY >= this.height * 0.20) {
          const dx = x - this.trailX;
          const dist = Math.abs(dx);
          if (dist < 240) {
            const pushFactor = (1 - dist / 240);
            const dy = this.trailY - (this.height * 0.55);
            waveY += Math.sin(dist * 0.03 - w.offset * 2) * pushFactor * (dy * 0.20);
          }
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

      this.ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
      this.ctx.lineWidth = 1.5;
      this.ctx.stroke();
    }

    // 4. White Specular Moving Focal Point Dot (ALWAYS Crisp & Ultra-Smooth)
    const dotAlpha = (this.mouseY >= this.height * 0.15) ? 0.95 : 0.4;
    const dotGrad = this.ctx.createRadialGradient(
      this.trailX, this.trailY, 0,
      this.trailX, this.trailY, 18
    );
    dotGrad.addColorStop(0, `rgba(255, 255, 255, ${dotAlpha})`);
    dotGrad.addColorStop(0.3, `rgba(255, 255, 255, ${dotAlpha * 0.6})`);
    dotGrad.addColorStop(0.7, `rgba(160, 224, 255, ${dotAlpha * 0.2})`);
    dotGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');

    this.ctx.fillStyle = dotGrad;
    this.ctx.beginPath();
    this.ctx.arc(this.trailX, this.trailY, 18, 0, Math.PI * 2);
    this.ctx.fill();

    // Sharp white core dot
    this.ctx.fillStyle = `rgba(255, 255, 255, ${dotAlpha})`;
    this.ctx.beginPath();
    this.ctx.arc(this.trailX, this.trailY, 3.5, 0, Math.PI * 2);
    this.ctx.fill();

    requestAnimationFrame(() => this.animate());
  }
}

// Global initialization helper
window.initViscousCanvas = function(id) {
  return new ViscousLiquidCanvas(id);
};


