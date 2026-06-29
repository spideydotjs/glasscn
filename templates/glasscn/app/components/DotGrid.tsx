"use client";
import { useEffect, useRef } from "react";
import { cn } from "../lib/utils";

const DotGrid = ({ className }: { className?: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dotSpacing = 40;
    let cols = 0;
    let rows = 0;
    
    let viewportMouseX = -1000;
    let viewportMouseY = -1000;
    let targetMouseX = -1000;
    let targetMouseY = -1000;
    let smoothMouseX = -1000;
    let smoothMouseY = -1000;
    let smoothVelocityX = 0;
    let smoothVelocityY = 0;
    let prevFrameMouseX = -1000;
    let prevFrameMouseY = -1000;

    let dotStates: {
      offsetX: number;
      offsetY: number;
      scale: number;
      alpha: number;
    }[] = [];

    const resizeCanvas = () => {
      const docHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        window.innerHeight
      );
      canvas.width = window.innerWidth;
      canvas.height = docHeight;

      const newCols = Math.ceil(canvas.width / dotSpacing) + 1;
      const newRows = Math.ceil(canvas.height / dotSpacing) + 1;

      if (newCols !== cols || newRows !== rows) {
        cols = newCols;
        rows = newRows;
        dotStates = new Array(cols * rows).fill(null).map(() => ({
          offsetX: 0,
          offsetY: 0,
          scale: 1,
          alpha: 0.15,
        }));
      }
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const handleMouseMove = (e: MouseEvent) => {
      viewportMouseX = e.clientX;
      viewportMouseY = e.clientY;
    };

    const handleMouseLeave = () => {
      viewportMouseX = -1000;
      viewportMouseY = -1000;
    };

    const resizeObserver = new ResizeObserver(() => {
      resizeCanvas();
    });
    resizeObserver.observe(document.body);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    const getForegroundColor = () => {
      const color = getComputedStyle(document.documentElement)
        .getPropertyValue("--foreground")
        .trim();
      return color;
    };

    const easeOut = (t: number): number => {
      return 1 - (1 - t) * (1 - t);
    };

    let startTime = performance.now();
    let animationId: number;

    const drawDots = (timestamp: number) => {
      const elapsed = (timestamp - startTime) / 1000;

      if (viewportMouseX > -999) {
        targetMouseX = viewportMouseX;
        targetMouseY = viewportMouseY + window.scrollY;
      } else {
        targetMouseX = -1000;
        targetMouseY = -1000;
      }

      const mouseLerp = 0.09;
      smoothMouseX += (targetMouseX - smoothMouseX) * mouseLerp;
      smoothMouseY += (targetMouseY - smoothMouseY) * mouseLerp;

      const rawVelX = smoothMouseX - prevFrameMouseX;
      const rawVelY = smoothMouseY - prevFrameMouseY;
      smoothVelocityX += (rawVelX - smoothVelocityX) * 0.1;
      smoothVelocityY += (rawVelY - smoothVelocityY) * 0.1;
      prevFrameMouseX = smoothMouseX;
      prevFrameMouseY = smoothMouseY;

      const velocity = Math.sqrt(
        smoothVelocityX * smoothVelocityX + smoothVelocityY * smoothVelocityY
      );
      const velocityFactor = Math.min(velocity / 20, 2);

      const influenceRadius = 200;
      const fgColor = getForegroundColor();

      const currentScrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      const buffer = 100;
      const visibleTop = currentScrollY - buffer;
      const visibleBottom = currentScrollY + viewportHeight + buffer;

      const rowStart = Math.max(0, Math.floor(visibleTop / dotSpacing) - 1);
      const rowEnd = Math.min(rows, Math.ceil(visibleBottom / dotSpacing) + 1);

      const clearTop = Math.max(0, rowStart * dotSpacing - dotSpacing);
      const clearBottom = Math.min(canvas.height, rowEnd * dotSpacing + dotSpacing);
      ctx.clearRect(0, clearTop, canvas.width, clearBottom - clearTop);

      for (let col = 0; col < cols; col++) {
        for (let row = rowStart; row < rowEnd; row++) {
          const idx = col * rows + row;
          const state = dotStates[idx];
          if (!state) continue;

          const baseX = col * dotSpacing;
          const baseY = row * dotSpacing;

          const dx = baseX - smoothMouseX;
          const dy = baseY - smoothMouseY;
          const distance = Math.sqrt(dx * dx + dy * dy);

          const wavePhase =
            elapsed * 0.4 +
            col * 0.12 +
            row * 0.1 +
            Math.sin(col * 0.25 + elapsed * 0.15) * 0.3;
          const breathe = Math.sin(wavePhase * Math.PI) * 0.5 + 0.5;
          const easedBreathe = easeOut(breathe);

          let targetOffsetX = 0;
          let targetOffsetY = 0;
          let targetScale = 1;
          let targetAlpha = 0.15;

          if (distance < influenceRadius) {
            const normalizedDist = distance / influenceRadius;
            const force = (1 - normalizedDist) * 0.5;
            const angle = Math.atan2(dy, dx);

            const pushStrength = 35 + velocityFactor * 15;
            targetOffsetX = Math.cos(angle) * force * pushStrength;
            targetOffsetY = Math.sin(angle) * force * pushStrength;

            targetScale = (2 + force * 2.5 + velocityFactor * 0.8) / 1.5;
            targetAlpha = 0.5 + force * 0.5;
          } else {
            const driftX =
              Math.sin(elapsed * 0.25 + col * 0.4 + row * 0.25) * 0.5;
            const driftY =
              Math.cos(elapsed * 0.2 + col * 0.25 + row * 0.4) * 0.5;
            targetOffsetX = driftX;
            targetOffsetY = driftY;
            targetScale = 1 + easedBreathe * 0.15;
            targetAlpha = 0.15 + easedBreathe * 0.03;
          }

          const lerpSpeed = distance < influenceRadius ? 0.45 : 0.06;
          state.offsetX += (targetOffsetX - state.offsetX) * lerpSpeed;
          state.offsetY += (targetOffsetY - state.offsetY) * lerpSpeed;
          state.scale += (targetScale - state.scale) * lerpSpeed;
          state.alpha += (targetAlpha - state.alpha) * lerpSpeed;

          const drawX = baseX + state.offsetX;
          const drawY = baseY + state.offsetY;
          const radius = 1.5 * state.scale;

          ctx.globalAlpha = state.alpha;
          ctx.fillStyle = fgColor;
          ctx.beginPath();
          ctx.arc(drawX, drawY, radius, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      ctx.globalAlpha = 1.0;

      smoothVelocityX *= 0.95;
      smoothVelocityY *= 0.95;

      animationId = requestAnimationFrame(drawDots);
    };

    animationId = requestAnimationFrame(drawDots);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", resizeCanvas);
      resizeObserver.disconnect();
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn("absolute inset-0 z-0 overflow-hidden pointer-events-none", className)}
      style={{ height: "100%" }}
    >
      <div
        className="absolute inset-0 opacity-[0.03] transition-opacity duration-1000 dark:opacity-[0.02]"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, var(--foreground) 0%, transparent 60%)",
        }}
      />

      <canvas
        ref={canvasRef}
        className="absolute inset-0 opacity-70 transition-opacity duration-1000 dark:opacity-50"
      />

      <div
        className="absolute top-[15%] left-[8%] w-px h-24 bg-gradient-to-b from-transparent via-muted-foreground/20 to-transparent"
        style={{
          animation: "smoothPulse 3s ease-in-out infinite",
        }}
      />
      <div
        className="absolute top-[15%] left-[8%] w-24 h-px bg-gradient-to-r from-muted-foreground/20 to-transparent"
        style={{
          animation: "smoothPulse 3s ease-in-out 0.5s infinite",
        }}
      />

      <div
        className="absolute bottom-[20%] right-[10%] w-px h-32 bg-gradient-to-b from-transparent via-muted-foreground/15 to-transparent"
        style={{
          animation: "smoothPulse 4s ease-in-out 1s infinite",
        }}
      />
      <div
        className="absolute bottom-[20%] right-[10%] w-32 h-px bg-gradient-to-r from-transparent to-muted-foreground/15"
        style={{
          animation: "smoothPulse 4s ease-in-out 1.5s infinite",
        }}
      />

      <div
        className="absolute top-[45%] right-[5%] w-px h-16 bg-gradient-to-b from-transparent via-muted-foreground/12 to-transparent"
        style={{
          animation: "smoothPulse 3.5s ease-in-out 0.8s infinite",
        }}
      />
    </div>
  );
};

export default DotGrid;
