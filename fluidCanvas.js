/**
 * Viscous Blackish-Ash Neon Liquid Background Engine
 * Renders a dynamic, high-performance fluid wave canvas
 * Acceleration scales with scroll speed in fraction of a second.
 */

class ViscousLiquidCanvas {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    
    this.width = 0;
    this.height = 0;
    
    // Fluid Physics properties
    this.speedMultiplier = 1.0;
    this.targetSpeedMultiplier = 1.0;
    this.scrollTimeout = null;
    this.lastScrollY = window.scrollY;
    
    // Wave parameters
    this.waves = [
      { amplitude: 45, wavelength: 0.008, speed: 0.015, offset: 0, color: 'rgba(25, 25, 35, 0.85)' },
      { amplitude: 65, wavelength: 0.005, speed: 0.022, offset: 2.1, color: 'rgba(18, 18, 28, 0.90)' },
      { amplitude: 35, wavelength: 0.012, speed: 0.035, offset: 4.2, color: 'rgba(10, 10, 18, 0.95)' }
    ];

    // Neon liquid droplets/blobs
    this.droplets = [];
    this.numDroplets = 16;
    
    this.init();
  }

  init() {
    this.resize();
    window.addEventListener('resize', () => this.resize());
    window.addEventListener('scroll', () => this.handleScroll(), { passive: true });
    
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
        radius: Math.random() * 80 + 30,
        vx: (Math.random() - 0.5) * 1.2,
        vy: (Math.random() - 0.5) * 1.2,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 0.03 + 0.01,
        glowColor: i % 4 === 0 
          ? 'rgba(160, 224, 255, 0.15)' 
          : i % 4 === 1 
          ? 'rgba(220, 200, 255, 0.12)' 
          : 'rgba(255, 255, 255, 0.08)'
      });
    }
  }

  handleScroll() {
    const currentScrollY = window.scrollY;
    const delta = Math.abs(currentScrollY - this.lastScrollY);
    this.lastScrollY = currentScrollY;

    // Instant boost to fluid speed on scroll
    const boost = Math.min(delta * 0.15, 6.0);
    this.targetSpeedMultiplier = 1.0 + boost;

    clearTimeout(this.scrollTimeout);
    this.scrollTimeout = setTimeout(() => {
      this.targetSpeedMultiplier = 1.0;
    }, 120); // Fraction of a second recovery
  }

  animate() {
    // Smoothly interpolate speed multiplier
    this.speedMultiplier += (this.targetSpeedMultiplier - this.speedMultiplier) * 0.1;

    // Base background: Viscous deep ash black
    this.ctx.fillStyle = '#0a0a0f';
    this.ctx.fillRect(0, 0, this.width, this.height);

    // Render Neon Liquid Blobs
    for (let d of this.droplets) {
      d.x += d.vx * this.speedMultiplier;
      d.y += d.vy * this.speedMultiplier;
      d.pulse += d.pulseSpeed * this.speedMultiplier;

      // Wrap around edges smoothly
      if (d.x < -d.radius) d.x = this.width + d.radius;
      if (d.x > this.width + d.radius) d.x = -d.radius;
      if (d.y < -d.radius) d.y = this.height + d.radius;
      if (d.y > this.height + d.radius) d.y = -d.radius;

      const currentRadius = d.radius + Math.sin(d.pulse) * 12;

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

    // Render Viscous Liquid Waves
    for (let w of this.waves) {
      w.offset += w.speed * this.speedMultiplier;

      this.ctx.beginPath();
      this.ctx.moveTo(0, this.height);

      for (let x = 0; x <= this.width; x += 15) {
        const y = Math.sin(x * w.wavelength + w.offset) * w.amplitude + (this.height * 0.5);
        if (x === 0) {
          this.ctx.moveTo(x, y);
        } else {
          this.ctx.lineTo(x, y);
        }
      }

      this.ctx.lineTo(this.width, this.height);
      this.ctx.lineTo(0, this.height);
      this.ctx.closePath();

      this.ctx.fillStyle = w.color;
      this.ctx.fill();

      // Top edge neon liquid specular shine
      this.ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
      this.ctx.lineWidth = 1.5;
      this.ctx.stroke();
    }

    requestAnimationFrame(() => this.animate());
  }
}

// Global initialization helper
window.initViscousCanvas = function(id) {
  return new ViscousLiquidCanvas(id);
};
