import personalInfo from "../../data/personalInfo.js";
import { SOCIAL_LINKS } from "../../utils/constants.js";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const iconMap = {
  github: FaGithub,
  linkedin: FaLinkedin,
  leetcode: SiLeetcode,
};

function Footer({ dark }) {
  const year = new Date().getFullYear();
  const name = personalInfo.name || "Your Name";

  return (
    <footer
      id="footer"
      style={{
        position: "relative",
        zIndex: 1,
        padding: "56px 20px 30px",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          borderTop: dark
            ? "1px solid rgba(255,255,255,0.12)"
            : "1px solid rgba(0,0,0,0.08)",
          paddingTop: "20px",
          display: "flex",
          flexWrap: "wrap",
          gap: "14px",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        className="footer-inner"
      >
        <p
          style={{
            margin: 0,
            color: dark ? "rgba(236, 238, 255, 0.72)" : "rgba(20, 24, 40, 0.7)",
          }}
        >
          © {year} {name}.
        </p>

        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          {SOCIAL_LINKS.map((link) => {
            const IconComponent = iconMap[link.icon];
            return (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              aria-label={link.name}
              style={{
                width: "34px",
                height: "34px",
                borderRadius: "9999px",
                display: "grid",
                placeItems: "center",
                textDecoration: "none",
                background: dark ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.85)",
                border: dark
                  ? "1px solid rgba(255,255,255,0.16)"
                  : "1px solid rgba(0,0,0,0.1)",
                transition: "transform 0.2s ease, border-color 0.2s ease",
              }}
              onMouseEnter={(event) => {
                event.currentTarget.style.transform = "translateY(-2px)";
                event.currentTarget.style.borderColor = link.color;
              }}
              onMouseLeave={(event) => {
                event.currentTarget.style.transform = "translateY(0)";
                event.currentTarget.style.borderColor = dark
                  ? "rgba(255,255,255,0.16)"
                  : "rgba(0,0,0,0.1)";
              }}
            >
              {IconComponent ? <IconComponent size={16} color={link.color} /> : null}
            </a>
            );
          })}
        </div>
      </div>
      <style>{`
        @media (max-width: 700px) {
          .footer-inner {
            justify-content: center !important;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
}

export default Footer;
