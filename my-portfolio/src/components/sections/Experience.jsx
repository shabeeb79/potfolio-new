import { useState } from "react";
import { useInView } from "../../hooks/useInView.js";
import experience, { education } from "../../data/experience.js";

function Experience({ dark }) {
  const [activeTab, setActiveTab] = useState("Work");
  const [sectionRef, inView] = useInView(0.2);
  const timelineData = activeTab === "Work" ? experience : education;

  return (
    <section
      id="experience"
      ref={sectionRef}
      style={{
        padding: "100px 20px 56px",
        position: "relative",
        zIndex: 1,
        background: dark ? "rgba(255,255,255,0.03)" : "rgba(10,10,20,0.03)",
      }}
    >
      <div style={{ maxWidth: "980px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "24px" }}>
          <p
            style={{
              margin: 0,
              color: "#6C63FF",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              fontWeight: 600,
              fontSize: "0.8rem",
            }}
          >
            Experience
          </p>
          <h2
            style={{
              margin: "8px 0 10px",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontFamily: "var(--font-display, 'Syne', sans-serif)",
              color: dark ? "#f3f4ff" : "#121427",
            }}
          >
            Journey so far
          </h2>
          <div
            style={{
              width: "120px",
              height: "4px",
              margin: "0 auto",
              borderRadius: "999px",
              background: "linear-gradient(90deg, #6C63FF, #00D2A0)",
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "10px",
            marginBottom: "30px",
          }}
        >
          {["Work", "Education"].map((tab) => {
            const active = activeTab === tab;
            return (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                style={{
                  borderRadius: "9999px",
                  padding: "9px 18px",
                  fontWeight: 700,
                  cursor: "pointer",
                  border: active ? "1px solid transparent" : "1px solid #6C63FF",
                  background: active ? "#6C63FF" : "transparent",
                  color: active ? "#fff" : "#6C63FF",
                  transition: "all 0.2s ease",
                }}
              >
                {tab}
              </button>
            );
          })}
        </div>

        <div style={{ position: "relative", paddingLeft: "34px" }}>
          <div
            style={{
              position: "absolute",
              left: "10px",
              top: 0,
              bottom: 0,
              width: "2px",
              background: dark ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.12)",
            }}
          />

          <div style={{ display: "grid", gap: "18px" }}>
            {timelineData.map((item, index) => {
              const title = activeTab === "Work" ? item.role : item.degree;
              const subtitle =
                activeTab === "Work" ? item.company : item.institution;

              return (
                <div
                  key={`${title}-${item.period}`}
                  style={{
                    position: "relative",
                    opacity: inView ? 1 : 0,
                    transform: inView ? "translateX(0)" : "translateX(-24px)",
                    transition:
                      "opacity 0.55s ease, transform 0.55s ease, border-color 0.25s ease",
                    transitionDelay: `${index * 0.08}s`,
                    borderRadius: "16px",
                    border: dark
                      ? "1px solid rgba(255,255,255,0.1)"
                      : "1px solid rgba(0,0,0,0.08)",
                    background: dark ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.85)",
                    padding: "18px 18px 18px 20px",
                    marginLeft: "8px",
                  }}
                  onMouseEnter={(event) => {
                    event.currentTarget.style.transform = "translateX(4px)";
                    event.currentTarget.style.borderColor =
                      item.color || "#6C63FF";
                  }}
                  onMouseLeave={(event) => {
                    event.currentTarget.style.transform = inView
                      ? "translateX(0)"
                      : "translateX(-24px)";
                    event.currentTarget.style.borderColor = dark
                      ? "rgba(255,255,255,0.1)"
                      : "rgba(0,0,0,0.08)";
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      left: "-31px",
                      top: "26px",
                      width: "16px",
                      height: "16px",
                      borderRadius: "50%",
                      background: item.color || "#6C63FF",
                      border: `3px solid ${dark ? "#131625" : "#ffffff"}`,
                      boxShadow: `0 0 0 4px ${(item.color || "#6C63FF")}33`,
                    }}
                  />

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      gap: "12px",
                      flexWrap: "wrap",
                    }}
                  >
                    <div>
                      <h3
                        style={{
                          margin: 0,
                          fontFamily: "var(--font-display, 'Syne', sans-serif)",
                          fontSize: "1.2rem",
                          color: dark ? "#f3f4ff" : "#111427",
                        }}
                      >
                        {title}
                      </h3>
                      <p
                        style={{
                          margin: "6px 0 0",
                          color: item.color || "#6C63FF",
                          fontWeight: 600,
                        }}
                      >
                        {subtitle}
                      </p>
                    </div>
                    <span
                      style={{
                        borderRadius: "9999px",
                        padding: "6px 12px",
                        fontSize: "0.82rem",
                        fontWeight: 700,
                        color: item.color || "#6C63FF",
                        background: `${item.color || "#6C63FF"}22`,
                        border: `1px solid ${(item.color || "#6C63FF")}44`,
                      }}
                    >
                      {item.period}
                    </span>
                  </div>

                  {"location" in item && item.location ? (
                    <p
                      style={{
                        margin: "10px 0 0",
                        fontSize: "0.9rem",
                        color: dark
                          ? "rgba(236,238,255,0.66)"
                          : "rgba(35,38,58,0.66)",
                      }}
                    >
                      {item.location}
                    </p>
                  ) : null}

                  <p
                    style={{
                      margin: "10px 0 0",
                      lineHeight: 1.7,
                      color: dark
                        ? "rgba(236,238,255,0.74)"
                        : "rgba(35,38,58,0.74)",
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
