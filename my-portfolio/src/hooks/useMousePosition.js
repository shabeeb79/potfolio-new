import { useEffect, useRef, useState } from "react";

function useMousePosition(smoothing = 1) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const targetRef = useRef({ x: 0, y: 0 });
  const currentRef = useRef({ x: 0, y: 0 });
  const frameRef = useRef(null);

  useEffect(() => {
    const clampedSmoothing = Math.min(1, Math.max(0.01, smoothing));

    const handleMove = (event) => {
      targetRef.current = { x: event.clientX, y: event.clientY };

      if (clampedSmoothing >= 1) {
        currentRef.current = targetRef.current;
        setPosition(targetRef.current);
      }
    };

    const animate = () => {
      if (clampedSmoothing < 1) {
        const nextX =
          currentRef.current.x +
          (targetRef.current.x - currentRef.current.x) * clampedSmoothing;
        const nextY =
          currentRef.current.y +
          (targetRef.current.y - currentRef.current.y) * clampedSmoothing;

        currentRef.current = { x: nextX, y: nextY };
        setPosition(currentRef.current);
      }

      frameRef.current = window.requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMove);
    frameRef.current = window.requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      if (frameRef.current) window.cancelAnimationFrame(frameRef.current);
    };
  }, [smoothing]);

  return position;
}

export default useMousePosition;
