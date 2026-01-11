import { useEffect, useRef, useState } from "react";

const DOT_COUNT = 6;
const EASE = 0.22;
const MIN_DESKTOP_WIDTH = 1024;

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const mouse = useRef({ x: 0, y: 0 });
  const dots = useRef([]);
  const dotRefs = useRef([]);
  const rafId = useRef(null);

  useEffect(() => {
    const checkDevice = () => {
      const isTouch =
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        navigator.msMaxTouchPoints > 0;

      setEnabled(!isTouch && window.innerWidth >= MIN_DESKTOP_WIDTH);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    dots.current = Array.from({ length: DOT_COUNT }, () => ({
      x: mouse.current.x,
      y: mouse.current.y,
    }));

    const move = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);

    const animate = () => {
      let x = mouse.current.x;
      let y = mouse.current.y;

      dots.current.forEach((dot, i) => {
        dot.x += (x - dot.x) * EASE;
        dot.y += (y - dot.y) * EASE;

        const el = dotRefs.current[i];
        if (el) {
          el.style.transform = `translate(${dot.x}px, ${dot.y}px)`;
        }

        x = dot.x;
        y = dot.y;
      });

      rafId.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", move);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      {/* Glow */}
      <div
        className="pointer-events-none fixed top-0 left-0 z-[9999]"
        style={{
          transform: `translate3d(${pos.x - 40}px, ${pos.y - 40}px, 0)`,
          transition: "transform 0.12s ease-out",
        }}
      >
        <div className="w-20 h-20 rounded-full bg-gradient-to-r from-pink-500 to-blue-500 blur-3xl opacity-80" />
      </div>

      {/* Trailing dots */}
      {Array.from({ length: DOT_COUNT }).map((_, i) => (
        <span
          key={i}
          ref={(el) => (dotRefs.current[i] = el)}
          className="pointer-events-none fixed top-0 left-0 z-[9998] rounded-full bg-blue-400"
          style={{
            width: 8 - i,
            height: 8 - i,
            opacity: 1 - i * 0.15,
          }}
        />
      ))}
    </>
  );
}
