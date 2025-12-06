import { useEffect, useRef } from "react";

const FluidGridBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    let mouseX = 0;
    let mouseY = 0;

    const spacing = 30;
    const dotRadius = 2;
    const maxDistortion = 40;
    const dampening = 0.08;

    interface Dot {
      x: number;
      y: number;
      originalX: number;
      originalY: number;
      vx: number;
      vy: number;
    }

    const dots: Dot[] = [];
    const rows = Math.floor(height / spacing) + 1;
    const cols = Math.floor(width / spacing) + 1;

    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        dots.push({
          x: x * spacing,
          y: y * spacing,
          originalX: x * spacing,
          originalY: y * spacing,
          vx: 0,
          vy: 0,
        });
      }
    }

    const mouseMoveHandler = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const resizeHandler = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener("mousemove", mouseMoveHandler);
    window.addEventListener("resize", resizeHandler);

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < dots.length; i++) {
        const dot = dots[i];
        const dx = mouseX - dot.originalX;
        const dy = mouseY - dot.originalY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 150) {
          const force = (150 - distance) / 150;
          const angle = Math.atan2(dy, dx);
          const targetX = dot.originalX + Math.cos(angle) * force * maxDistortion;
          const targetY = dot.originalY + Math.sin(angle) * force * maxDistortion;

          dot.vx += (targetX - dot.x) * dampening;
          dot.vy += (targetY - dot.y) * dampening;
        } else {
          dot.vx += (dot.originalX - dot.x) * dampening;
          dot.vy += (dot.originalY - dot.y) * dampening;
        }

        dot.vx *= 0.92;
        dot.vy *= 0.92;
        dot.x += dot.vx;
        dot.y += dot.vy;

        ctx.beginPath();
        const dotDist = Math.sqrt((mouseX - dot.x) ** 2 + (mouseY - dot.y) ** 2);
        const gradient = 1 - Math.min(1, dotDist / 200);
        const color = Math.floor(40 + gradient * 200);

        ctx.fillStyle = `rgb(${color}, ${color}, ${color + 40})`;
        ctx.arc(dot.x, dot.y, dotRadius + gradient * 1.5, 0, Math.PI * 2);
        ctx.fill();
      }

      requestAnimationFrame(animate);
    };

    animate();

    // Cleanup listeners
    return () => {
      window.removeEventListener("mousemove", mouseMoveHandler);
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
};

export default FluidGridBackground;
