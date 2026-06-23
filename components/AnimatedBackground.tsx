'use client';

import { useEffect, useRef } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  size: number;
  opacity: number;
  vx: number;
  vy: number;
}

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseTargetRef = useRef({ x: 0, y: 0 });
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const center = { x: canvas.width / 2, y: canvas.height / 2 };
      mouseTargetRef.current = center;
      mouseRef.current = center;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize particles
    const initParticles = () => {
      particlesRef.current = [];
      for (let i = 0; i < 50; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        particlesRef.current.push({
          id: i,
          x,
          y,
          baseX: x,
          baseY: y,
          size: Math.random() * 2 + 0.5,
          opacity: Math.random() * 0.5 + 0.2,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
        });
      }
    };
    initParticles();

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      mouseTargetRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const animate = () => {
      mouseRef.current.x += (mouseTargetRef.current.x - mouseRef.current.x) * 0.1;
      mouseRef.current.y += (mouseTargetRef.current.y - mouseRef.current.y) * 0.1;

      // Clear canvas with semi-transparent background for trail effect
      ctx.fillStyle = 'rgba(11, 15, 25, 0.12)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const cursorGlow = ctx.createRadialGradient(
        mouseRef.current.x,
        mouseRef.current.y,
        0,
        mouseRef.current.x,
        mouseRef.current.y,
        260
      );
      cursorGlow.addColorStop(0, 'rgba(167, 139, 250, 0.22)');
      cursorGlow.addColorStop(0.35, 'rgba(96, 165, 250, 0.12)');
      cursorGlow.addColorStop(1, 'rgba(11, 15, 25, 0)');
      ctx.fillStyle = cursorGlow;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particlesRef.current.forEach((particle) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Mouse interaction
        const dx = mouseRef.current.x - particle.x;
        const dy = mouseRef.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const repelDistance = 180;

        if (distance < repelDistance) {
          const angle = Math.atan2(dy, dx);
          const force = (repelDistance - distance) / repelDistance;
          particle.vx -= Math.cos(angle) * force * 0.2;
          particle.vy -= Math.sin(angle) * force * 0.2;
        }

        particle.vx += (particle.baseX - particle.x) * 0.0004;
        particle.vy += (particle.baseY - particle.y) * 0.0004;

        // Damping
        particle.vx *= 0.975;
        particle.vy *= 0.975;

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.vx *= -1;
          particle.x = Math.max(0, Math.min(canvas.width, particle.x));
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.vy *= -1;
          particle.y = Math.max(0, Math.min(canvas.height, particle.y));
        }

        // Draw particle
        ctx.fillStyle = `rgba(167, 139, 250, ${particle.opacity})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw connecting lines
      particlesRef.current.forEach((particle, i) => {
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const other = particlesRef.current[j];
          const dx = particle.x - other.x;
          const dy = particle.y - other.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            const opacity = (1 - distance / 150) * 0.2;
            ctx.strokeStyle = `rgba(167, 139, 250, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();
          }
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ background: '#0B0F19' }}
    />
  );
}
