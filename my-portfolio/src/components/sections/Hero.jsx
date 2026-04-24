import personalInfo from "../../data/personalInfo.js";
import heroImage from "../../assets/hero.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const iconMap = {
  github: FaGithub,
  linkedin: FaLinkedin,
  leetcode: SiLeetcode,
};

function Hero({ dark }) {
  const name = personalInfo.name || "Mohammed Shabeeb VK";
  const title = personalInfo.title || "Full Stack Developer";
  const bio =
    personalInfo.bio ||
    "I design and build clean, modern, and user-focused digital experiences.";
  const socialLinks = [
    {
      label: "GitHub",
      href: personalInfo.github || "#",
      icon: "github",
    },
    {
      label: "LinkedIn",
      href: personalInfo.linkedin || "#",
      icon: "linkedin",
    },
    {
      label: "LeetCode",
      href: personalInfo.leetcode || "https://leetcode.com/",
      icon: "leetcode",
    },
  ];

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="hero" className="clean-hero">
      <div className="hero-inner">
        <div className="hero-left">
          <p className="hello-text">Hello, I&apos;m</p>
          <h1>{name}</h1>
          <p className="role-text">{title}</p>
          <p className="bio-text">{bio}</p>

          <div className="hero-cta">
            <button type="button" className="primary-btn" onClick={() => scrollTo("projects")}>
              View My Work
            </button>
            <button
              type="button"
              className="link-btn"
              onClick={() => {
                window.dispatchEvent(new CustomEvent("open-contact"));
                scrollTo("contact");
              }}
            >
              Contact Me
            </button>
          </div>

          <div className="social-wrap">
            <p>Connect with me</p>
            <div className="social-list">
              {socialLinks.map((link) => {
                const IconComponent = iconMap[link.icon];
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={link.label}
                  >
                    {IconComponent ? (
                      <IconComponent size={14} color={dark ? "#e9edff" : "#253046"} />
                    ) : null}
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="hero-right">
          <img src={heroImage} alt={name} />
        </div>
      </div>

      <style>{`
        .clean-hero {
          background: ${dark ? "#0a0a14" : "#efefef"};
          padding: 84px 0 0;
        }
        .hero-inner {
          width: 100%;
          max-width: 1120px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr minmax(280px, 470px);
          gap: 28px;
          align-items: center;
          min-height: clamp(520px, 78vh, 760px);
          padding: 18px 20px 14px;
          box-sizing: border-box;
        }
        .hero-left {
          padding: 24px 16px 24px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
          background: ${dark ? "#0a0a14" : "#efefef"};
        }
        .hello-text {
          margin: 0;
          color: ${dark ? "#8fa5ff" : "#3763e6"};
          font-size: 0.96rem;
          font-family: "Inter", system-ui, sans-serif;
          font-weight: 600;
        }
        .hero-left h1 {
          margin: 4px 0 0;
          font-size: clamp(2.1rem, 4.6vw, 4rem);
          line-height: 1.05;
          color: ${dark ? "#f4f6ff" : "#121212"};
          font-family: "Inter", system-ui, sans-serif;
          font-weight: 900;
          letter-spacing: -0.01em;
        }
        .role-text {
          margin: 10px 0 0;
          color: #2563eb;
          font-size: clamp(1.2rem, 1.8vw, 2rem);
          font-weight: 800;
          font-family: "Inter", system-ui, sans-serif;
        }
        .bio-text {
          margin: 14px 0 0;
          max-width: 470px;
          color: ${dark ? "rgba(236,240,255,0.72)" : "#595959"};
          line-height: 1.75;
          font-size: 1rem;
          font-family: "Inter", system-ui, sans-serif;
          font-weight: 400;
        }
        .hero-cta {
          margin-top: 22px;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          gap: 18px;
          flex-wrap: wrap;
        }
        .primary-btn {
          border: 1px solid #2563eb;
          background: #2563eb;
          color: #fff;
          padding: 10px 18px;
          border-radius: 8px;
          font-weight: 700;
          cursor: pointer;
        }
        .link-btn {
          border: 1px solid ${dark ? "rgba(255,255,255,0.16)" : "rgba(0,0,0,0.16)"};
          background: ${dark ? "rgba(255,255,255,0.06)" : "#fff"};
          color: ${dark ? "#e6e9ff" : "#111827"};
          font-weight: 600;
          border-radius: 8px;
          cursor: pointer;
          padding: 10px 16px;
        }
        .social-wrap {
          margin-top: 16px;
        }
        .social-wrap p {
          margin: 0 0 8px;
          color: ${dark ? "rgba(236,240,255,0.72)" : "#616161"};
          font-size: 0.84rem;
          font-weight: 500;
        }
        .social-list {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .social-list a {
          width: 28px;
          height: 28px;
          border-radius: 999px;
          text-decoration: none;
          display: grid;
          place-items: center;
          border: 1px solid ${dark ? "rgba(255,255,255,0.22)" : "rgba(0,0,0,0.18)"};
          background: ${dark ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.8)"};
        }
        .hero-right {
          background: ${dark ? "rgba(255,255,255,0.08)" : "#dce1e9"};
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          max-width: 470px;
          min-height: 500px;
          border-radius: 18px;
          overflow: hidden;
          padding: 0;
          justify-self: center;
        }
        .hero-right img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          object-position: center;
          display: block;
        }
        @media (max-width: 900px) {
          .hero-inner {
            grid-template-columns: 1fr;
            min-height: auto;
            padding: 10px 16px 18px;
            gap: 18px;
          }
          .hero-left {
            padding: 24px 8px 10px;
            align-items: center;
            text-align: center;
          }
          .hero-left h1 {
            font-size: clamp(2rem, 9.2vw, 3rem);
          }
          .hello-text {
            font-size: 0.9rem;
          }
          .role-text {
            font-size: 1.4rem;
          }
          .bio-text {
            font-size: 0.95rem;
          }
          .hero-cta {
            justify-content: center;
          }
          .social-wrap {
            text-align: center;
          }
          .social-list {
            justify-content: center;
          }
          .hero-right {
            width: 100%;
            min-height: 320px;
            max-width: 520px;
          }
          .hero-right img {
            height: 320px;
          }
        }
      `}</style>
    </section>
  );
}

export default Hero;
