function SkillBar({ skill, inView = false, index = 0 }) {
  const staggerDelay = index * 0.1;
  const level = Math.max(0, Math.min(100, skill?.level ?? 0));

  return (
    <div style={{ width: "100%" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "10px",
          opacity: inView ? 1 : 0,
          transform: inView ? "translateX(0)" : "translateX(-20px)",
          transition:
            "opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1), transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
          transitionDelay: `${staggerDelay}s`,
        }}
      >
        <span
          style={{
            color: "inherit",
            fontWeight: 500,
          }}
        >
          {skill?.name ?? "Skill"}
        </span>
        <span
          style={{
            color: "#6C63FF",
            fontWeight: 700,
          }}
        >
          {level}%
        </span>
      </div>

      <div
        style={{
          width: "100%",
          height: "8px",
          borderRadius: "9999px",
          background: "rgba(108, 99, 255, 0.16)",
          overflow: "hidden",
          opacity: inView ? 1 : 0,
          transform: inView ? "translateX(0)" : "translateX(-20px)",
          transition:
            "opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1), transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
          transitionDelay: `${staggerDelay + 0.05}s`,
        }}
      >
        <div
          style={{
            width: inView ? `${level}%` : "0%",
            height: "100%",
            borderRadius: "9999px",
            background: "linear-gradient(90deg, #6C63FF, #00D2A0)",
            transition: "width 1.2s cubic-bezier(0.4, 0, 0.2, 1)",
            transitionDelay: `${staggerDelay + 0.1}s`,
          }}
        />
      </div>
    </div>
  );
}

export default SkillBar;
