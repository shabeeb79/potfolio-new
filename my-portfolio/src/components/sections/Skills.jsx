import { useMemo } from "react";
import { useInView } from "../../hooks/useInView.js";
import skillsData from "../../data/skills.js";

const fallbackSkills = [
  { name: "React", level: 90, cat: "Frontend" },
  { name: "Nest.js", level: 85, cat: "Backend" },
  { name: "Git", level: 88, cat: "Tools" },
];

function Skills({ dark }) {
  const skills = skillsData.length > 0 ? skillsData : fallbackSkills;
  const [sectionRef, inView] = useInView(0.2);
  const groupedSkills = useMemo(() => {
    const frontend = skills.filter((skill) => skill.cat === "Frontend");
    const backend = skills.filter((skill) => skill.cat === "Backend");
    const tools = skills.filter((skill) => skill.cat === "Tools");
    return [
      { label: "Frontend", icon: "⌂", items: frontend },
      { label: "Backend", icon: "✎", items: backend },
      { label: "Tools & Others", icon: "✦", items: tools },
    ];
  }, [skills]);

  return (
    <section
      id="skills"
      ref={sectionRef}
      style={{
        padding: "56px 20px 112px",
        position: "relative",
        zIndex: 1,
      }}
    >
      <div style={{ maxWidth: "1120px", margin: "0 auto", position: "relative" }}>
        <h2
          style={{
            margin: "0 0 20px",
            fontSize: "1.55rem",
            fontWeight: 700,
            color: dark ? "#f1f3ff" : "#1a1e33",
            fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif",
          }}
        >
          Skills
        </h2>

        <div
          className="skills-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: "24px",
            width: "100%",
            border: dark ? "1px solid rgba(255,255,255,0.1)" : "1px solid rgba(0,0,0,0.08)",
            borderRadius: "16px",
            background: dark ? "rgba(255,255,255,0.02)" : "rgba(255,255,255,0.72)",
            padding: "20px",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          {groupedSkills.map((group) => (
            <div
              key={group.label}
              style={{
                paddingRight: "12px",
                borderRight:
                  group.label === "Tools & Others"
                    ? "none"
                    : dark
                      ? "1px solid rgba(255,255,255,0.08)"
                      : "1px solid rgba(0,0,0,0.06)",
              }}
            >
              <p
                style={{
                  margin: "2px 0 14px",
                  fontSize: "1.05rem",
                  fontWeight: 700,
                  color: dark ? "#e4e8ff" : "#1d2340",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                <span style={{ opacity: 0.8 }}>{group.icon}</span>
                {group.label}
              </p>

              <div style={{ display: "grid", gap: "14px" }}>
                {group.items.map((skill) => (
                  <div key={`${group.label}-${skill.name}`}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: "4px",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "0.92rem",
                          color: dark ? "rgba(236,240,255,0.8)" : "rgba(25,30,48,0.82)",
                        }}
                      >
                        {skill.name}
                      </span>
                    </div>
                    <div
                      style={{
                        width: "100%",
                        height: "8px",
                        borderRadius: "999px",
                        background: dark ? "rgba(255,255,255,0.12)" : "rgba(60,75,115,0.15)",
                        overflow: "hidden",
                      }}
                    >
                      <div
                        style={{
                          height: "100%",
                          width: inView ? `${skill.level}%` : "0%",
                          borderRadius: "999px",
                          background: "linear-gradient(90deg, #4f46e5, #06b6d4, #10b981)",
                          transition: "width 0.9s ease",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          #skills .skills-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

export default Skills;
