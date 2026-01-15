import { useEffect, useRef } from "react";

const BackgroundAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const CANVAS = canvasRef.current!;
    const CTX = CANVAS.getContext("2d")!;

    let W = window.innerWidth;
    let H = window.innerHeight;

    CANVAS.width = W;
    CANVAS.height = H;

    const XO = W / 2;
    const YO = H / 2;

    const NUM_PARTICLES = 400;
    const MAX_Z = 2;
    const MAX_R = 1;
    const Z_SPD = .5;

    class Vector {
      constructor(public x: number, public y: number, public z: number) {}

      add(v: Vector) {
        this.x += v.x;
        this.y += v.y;
        this.z += v.z;
      }

      scale(n: number) {
        this.x *= n;
        this.y *= n;
        this.z *= n;
      }
    }

    class Particle {
      pos: Vector;
      vel: Vector;
      fill = "rgba(255, 255, 255, 0.3)";
      stroke = this.fill;

      constructor(x: number, y: number, z: number) {
        this.pos = new Vector(x, y, z);
        this.vel = new Vector(0, 0, -Z_SPD);
        this.vel.scale(0.005);
      }

      update() {
        this.pos.add(this.vel);
      }

      render() {
        const X_COORD = this.pos.x - XO;
        const Y_COORD = this.pos.y - YO;
        const PX = X_COORD / this.pos.z;
        const PY = Y_COORD / this.pos.z;

        const X = PX + XO;
        const Y = PY + YO;

        const R = ((MAX_Z - this.pos.z) / MAX_Z) * MAX_R;

        if (X < 0 || X > W || Y < 0 || Y > H) this.pos.z = MAX_Z;

        this.update();

        CTX.beginPath();
        CTX.fillStyle = this.fill;
        CTX.strokeStyle = this.stroke;
        CTX.arc(X, Y, R, 0, Math.PI * 2);
        CTX.fill();
        CTX.stroke();
        CTX.closePath();
      }
    }

    const PARTICLES: Particle[] = [];
    for (let i = 0; i < NUM_PARTICLES; i++) {
      PARTICLES.push(new Particle(Math.random() * W, Math.random() * H, Math.random() * MAX_Z));
    }

    function loop() {
      requestAnimationFrame(loop);
      CTX.fillStyle = "rgba(0,0,0,0.15)";
      CTX.fillRect(0, 0, W, H);

      PARTICLES.forEach((p) => p.render());
    }

    loop();

    // Resize canvas
    const handleResize = () => {
      W = window.innerWidth;
      H = window.innerHeight;
      CANVAS.width = W;
      CANVAS.height = H;
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full z-10 pointer-events-none"
    />
  );
};

export default BackgroundAnimation;
