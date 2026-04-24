import { useScrollProgress } from "../../hooks/useInView.js";

function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "3px",
        background: "rgba(108,99,255,0.15)",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          width: `${progress}%`,
          height: "100%",
          background: "linear-gradient(90deg, #6C63FF, #00D2A0)",
          transition: "width 0.1s linear",
        }}
      />
    </div>
  );
}

export default ScrollProgress;
