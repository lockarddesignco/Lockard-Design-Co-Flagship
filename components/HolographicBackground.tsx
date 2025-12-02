import React, { useEffect, useRef } from 'react';

interface HolographicBackgroundProps {
  theme: 'dark' | 'light';
}

const HolographicBackground: React.FC<HolographicBackgroundProps> = ({ theme }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width: number;
    let height: number;
    let pulses: Pulse[] = [];
    const gridSize = 50; // Grid size in pixels

    class Pulse {
      x: number;
      y: number;
      dx: number;
      dy: number;
      speed: number;
      trail: {x: number, y: number}[];
      trailLength: number;
      brightness: number;
      dead: boolean;
      lastTurnGridX: number;
      lastTurnGridY: number;

      constructor() {
        // Natural variation in speed
        this.speed = Math.random() * 1.5 + 1; // 1.0 to 2.5
        this.trailLength = Math.floor(Math.random() * 20 + 15);
        this.trail = [];
        // Brightness variation: faint to medium
        this.brightness = Math.random() * 0.5 + 0.2; 
        this.dead = false;
        this.lastTurnGridX = -1;
        this.lastTurnGridY = -1;

        // Spawn on grid lines
        if (Math.random() < 0.5) {
          // Horizontal spawn
          this.y = Math.floor(Math.random() * (height / gridSize)) * gridSize;
          // Spawn from left or right edge
          const fromLeft = Math.random() < 0.5;
          this.x = fromLeft ? -this.trailLength : width + this.trailLength;
          this.dx = fromLeft ? this.speed : -this.speed;
          this.dy = 0;
        } else {
          // Vertical spawn
          this.x = Math.floor(Math.random() * (width / gridSize)) * gridSize;
          // Spawn from top or bottom edge
          const fromTop = Math.random() < 0.5;
          this.y = fromTop ? -this.trailLength : height + this.trailLength;
          this.dy = fromTop ? this.speed : -this.speed;
          this.dx = 0;
        }

        // Initialize with starting position
        this.trail.push({x: this.x, y: this.y});
      }

      update() {
        this.x += this.dx;
        this.y += this.dy;

        // Maintain trail
        this.trail.push({x: this.x, y: this.y});
        if (this.trail.length > this.trailLength) {
          this.trail.shift();
        }

        // Offscreen check (with buffer)
        if (this.x < -100 || this.x > width + 100 || this.y < -100 || this.y > height + 100) {
          this.dead = true;
        }

        // Intelligent Turning Logic
        // Calculate current grid intersection indices
        const gridX = Math.round(this.x / gridSize);
        const gridY = Math.round(this.y / gridSize);
        
        const pixelX = gridX * gridSize;
        const pixelY = gridY * gridSize;
        
        // Distance to the exact center of the intersection
        const dist = Math.abs(this.x - pixelX) + Math.abs(this.y - pixelY);

        // Turn logic: only if near center of intersection and haven't turned here recently
        if (dist < this.speed && (gridX !== this.lastTurnGridX || gridY !== this.lastTurnGridY)) {
          this.lastTurnGridX = gridX;
          this.lastTurnGridY = gridY;
          
          // 40% chance to change direction at an intersection
          if (Math.random() < 0.4) { 
             // Snap to grid exact center to ensure clean 90-degree turns
             this.x = pixelX;
             this.y = pixelY;
             
             // 90 degree turn logic
             if (this.dx !== 0) {
                // Moving horizontally, switch to vertical
                this.dx = 0;
                this.dy = Math.random() < 0.5 ? this.speed : -this.speed;
             } else {
                // Moving vertically, switch to horizontal
                this.dy = 0;
                this.dx = Math.random() < 0.5 ? this.speed : -this.speed;
             }
          }
        }
      }

      draw(ctx: CanvasRenderingContext2D, isDark: boolean) {
        if (this.trail.length < 2) return;
        const colorBase = isDark ? {r: 0, g: 243, b: 255} : {r: 0, g: 136, b: 204};

        ctx.lineCap = 'round';
        ctx.lineWidth = 1.5;

        // Draw segmented trail for fading effect
        for (let i = 0; i < this.trail.length - 1; i++) {
           const p1 = this.trail[i];
           const p2 = this.trail[i+1];
           
           const progress = i / this.trail.length; // 0 (tail) to 1 (head)
           
           // Slight flicker effect on opacity for "data packet" feel
           const flicker = Math.random() > 0.95 ? 0.7 : 1; 
           
           // Calculate alpha: brighter at head, fading to tail
           const alpha = progress * this.brightness * flicker * (isDark ? 0.8 : 0.6);
           
           ctx.beginPath();
           ctx.moveTo(p1.x, p1.y);
           ctx.lineTo(p2.x, p2.y);
           ctx.strokeStyle = `rgba(${colorBase.r}, ${colorBase.g}, ${colorBase.b}, ${alpha})`;
           ctx.stroke();
        }
        
        // Draw Leading Head (brighter dot)
        const head = this.trail[this.trail.length-1];
        ctx.shadowBlur = isDark ? 6 : 0;
        ctx.shadowColor = `rgba(${colorBase.r}, ${colorBase.g}, ${colorBase.b}, 0.8)`;
        ctx.fillStyle = `rgba(${colorBase.r}, ${colorBase.g}, ${colorBase.b}, 1)`;
        ctx.beginPath();
        ctx.arc(head.x, head.y, 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const drawBackground = () => {
      const isDark = theme === 'dark';
      
      // Deep black background for dark mode, subtle grey for light
      ctx.fillStyle = isDark ? '#050505' : '#f9fafb';
      ctx.fillRect(0, 0, width, height);

      // Subtle Vignette/Haze for depth in dark mode
      if (isDark) {
          const gradient = ctx.createRadialGradient(width / 2, height / 2, width/4, width / 2, height / 2, width);
          gradient.addColorStop(0, 'rgba(0, 243, 255, 0.02)'); // Extremely faint center glow
          gradient.addColorStop(1, 'rgba(0, 0, 0, 0.3)'); // Darker edges
          ctx.fillStyle = gradient;
          ctx.fillRect(0, 0, width, height);
      }

      // Draw Static Grid
      ctx.strokeStyle = isDark ? 'rgba(0, 243, 255, 0.03)' : 'rgba(0,0,0,0.03)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      for (let x = 0; x <= width; x += gridSize) {
        ctx.moveTo(x, 0); ctx.lineTo(x, height);
      }
      for (let y = 0; y <= height; y += gridSize) {
        ctx.moveTo(0, y); ctx.lineTo(width, y);
      }
      ctx.stroke();
    };

    const animate = () => {
      drawBackground();
      
      // Spawn new pulses
      // Limit total count to keep it "quiet" and minimal
      // Low probability spawn rate
      if (pulses.length < 12 && Math.random() < 0.015) {
        pulses.push(new Pulse());
      }

      // Update and Draw
      pulses = pulses.filter(p => {
        p.update();
        p.draw(ctx, theme === 'dark');
        return !p.dead;
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resize);
    resize();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none" />
  );
};

export default HolographicBackground;