import { useInView } from "../../hooks/useInView.js";
import personalInfo from "../../data/personalInfo.js";

const stats = [
  { value: "1", label: "Years Exp" },
  { value: "4+", label: "Projects" },
];

function About({ dark }) {
  const [sectionRef, inView] = useInView(0.2);
  const hasProfileImage = Boolean(personalInfo.profileImage);

  return (
    <section
      id="about"
      ref={sectionRef}
      style={{
        padding: "56px 20px 56px",
        position: "relative",
        zIndex: 1,
      }}
    >
      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
          align-items: center;
        }
        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr;
          }
        }
        @media (max-width: 560px) {
          .about-stats-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ marginBottom: "42px", textAlign: "center" }}>
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
            About Me
          </p>
          <h2
            style={{
              margin: "8px 0 12px",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif",
              fontWeight: 700,
              color: dark ? "#f3f4ff" : "#121427",
            }}
          >
            Crafting thoughtful digital products
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

        <div className="about-grid">
          <div
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateX(0)" : "translateX(-30px)",
              transition: "opacity 0.7s ease, transform 0.7s ease",
            }}
          >
            <div
              style={{
                width: "min(100%, 380px)",
                aspectRatio: "1 / 1",
                margin: "0 auto",
                borderRadius: "24px",
                border: dark
                  ? "1px solid rgba(255,255,255,0.1)"
                  : "1px solid rgba(0,0,0,0.08)",
                background:
                  "linear-gradient(140deg, rgba(108,99,255,0.18), rgba(0,210,160,0.14))",
                display: "grid",
                placeItems: "center",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {hasProfileImage ? (
                <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.name || "Profile"}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              ) : (
                <span style={{ fontSize: "5rem" }}>👨‍💻</span>
              )}

              <div
                style={{
                  position: "absolute",
                  right: "16px",
                  bottom: "16px",
                  borderRadius: "14px",
                  padding: "10px 14px",
                  background: dark ? "rgba(10, 10, 20, 0.85)" : "rgba(255,255,255,0.85)",
                  border: "1px solid rgba(108,99,255,0.35)",
                  color: "#6C63FF",
                  fontWeight: 700,
                  backdropFilter: "blur(8px)",
                }}
              >
               1 Year
              </div>
            </div>
          </div>

          <div
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateX(0)" : "translateX(30px)",
              transition: "opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s",
            }}
          >
            <h3
              style={{
                margin: "0 0 14px",
                fontSize: "clamp(1.4rem, 2.4vw, 2rem)",
                fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif",
                fontWeight: 600,
                color: dark ? "#f3f4ff" : "#111427",
              }}
            >
              Turning ideas into reality
            </h3>
            <p
              style={{
                margin: 0,
                color: dark ? "rgba(236, 238, 255, 0.72)" : "rgba(35, 38, 58, 0.72)",
                lineHeight: 1.75,
              }}
            >
              I design and build end-to-end web products that balance clean user
              experience with strong engineering fundamentals. My work focuses on
              scalable interfaces, maintainable architecture, and performance first
              execution.
            </p>
            <p
              style={{
                margin: "14px 0 0",
                color: dark ? "rgba(236, 238, 255, 0.72)" : "rgba(35, 38, 58, 0.72)",
                lineHeight: 1.75,
              }}
            >
              From concept to deployment, I collaborate closely with teams to ship
              polished digital experiences that solve real business problems and
              create measurable impact for users and stakeholders.
            </p>

            <div
              className="about-stats-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                gap: "12px",
                marginTop: "22px",
              }}
            >
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  style={{
                    borderRadius: "14px",
                    border: dark
                      ? "1px solid rgba(255,255,255,0.1)"
                      : "1px solid rgba(0,0,0,0.08)",
                    padding: "14px",
                    background: dark ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.75)",
                  }}
                >
                  <p
                    style={{
                      margin: 0,
                      fontSize: "1.35rem",
                      fontWeight: 800,
                      background: "linear-gradient(90deg, #6C63FF, #00D2A0)",
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      color: "transparent",
                    }}
                  >
                    {stat.value}
                  </p>
                  <p
                    style={{
                      margin: "6px 0 0",
                      color: dark
                        ? "rgba(236, 238, 255, 0.68)"
                        : "rgba(35, 38, 58, 0.68)",
                      fontSize: "0.92rem",
                    }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
