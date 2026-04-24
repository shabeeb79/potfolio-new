import { useEffect, useState } from "react";
import { NAV_ITEMS } from "../../utils/constants.js";
import ThemeToggle from "../ui/ThemeToggle.jsx";

function Navbar({ dark, toggleDark }) {
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      const mobile = window.innerWidth < 900;
      setIsMobile(mobile);
      if (!mobile) setMenuOpen(false);
    };

    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const scrollTo = (id) => {
    const section = document.getElementById(id);
    if (!section) return;
    section.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  };

  return (
    <header
      style={{
        position: "sticky",
        top: "12px",
        zIndex: 100,
        display: "flex",
        justifyContent: "center",
        padding: "0 14px",
      }}
    >
      <nav
        style={{
          width: isMobile
            ? "min(96%, 680px)"
            : "min(1180px, calc(100% - 54px))",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "12px",
          padding: "10px 20px",
          borderRadius: isMobile ? "16px" : "9999px",
          border: dark ? "1px solid rgba(255,255,255,0.12)" : "1px solid rgba(0,0,0,0.08)",
          background: dark
            ? scrolled
              ? "rgba(14, 14, 24, 0.94)"
              : "rgba(14, 14, 24, 0.9)"
            : scrolled
              ? "rgba(255, 255, 255, 0.95)"
              : "rgba(255, 255, 255, 0.92)",
          backdropFilter: scrolled || menuOpen ? "blur(12px)" : "none",
          WebkitBackdropFilter: scrolled || menuOpen ? "blur(12px)" : "none",
          boxShadow: dark ? "0 8px 24px rgba(0, 0, 0, 0.35)" : "0 8px 20px rgba(0, 0, 0, 0.08)",
          transition: "all 0.3s ease",
          flexWrap: "wrap",
        }}
      >
        <button
          type="button"
          onClick={() => scrollTo("hero")}
          style={{
            border: "none",
            background: "transparent",
            cursor: "pointer",
            color: dark ? "#eef0ff" : "#151826",
            fontWeight: 700,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            fontFamily: "'Inter', system-ui, sans-serif",
            fontSize: "1rem",
          }}
        >
          SHABEEB
        </button>

        <div
          style={{
            width: isMobile ? "100%" : "auto",
            display: isMobile ? (menuOpen ? "grid" : "none") : "flex",
            gridTemplateColumns: "1fr",
            alignItems: "center",
            gap: "6px",
            justifyContent: "center",
            marginTop: isMobile ? "8px" : "0",
            borderTop:
              isMobile && menuOpen
                ? dark
                  ? "1px solid rgba(255,255,255,0.12)"
                  : "1px solid rgba(0,0,0,0.1)"
                : "none",
            paddingTop: isMobile && menuOpen ? "8px" : "0",
          }}
        >
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollTo(item.id)}
              style={{
                border: "none",
                background: "transparent",
                cursor: "pointer",
                color: dark ? "rgba(236,240,255,0.82)" : "rgba(17,20,39,0.82)",
                padding: isMobile ? "10px 12px" : "8px 10px",
                textAlign: isMobile ? "left" : "center",
                borderRadius: "10px",
                fontWeight: 600,
                fontSize: "0.9rem",
                transition: "background-color 0.2s ease, color 0.2s ease",
              }}
              onMouseEnter={(event) => {
                event.currentTarget.style.background = dark
                  ? "rgba(255,255,255,0.08)"
                  : "rgba(0,0,0,0.06)";
              }}
              onMouseLeave={(event) => {
                event.currentTarget.style.background = "transparent";
              }}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          {!isMobile ? <ThemeToggle dark={dark} onToggle={toggleDark} /> : null}
          {isMobile ? (
            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Toggle navigation menu"
              style={{
                border: dark ? "1px solid rgba(255,255,255,0.18)" : "1px solid rgba(0,0,0,0.12)",
                background: dark ? "rgba(22,22,34,0.92)" : "rgba(255,255,255,0.9)",
                borderRadius: "10px",
                width: "36px",
                height: "36px",
                cursor: "pointer",
                color: dark ? "#f0f2ff" : "#111427",
                fontWeight: 700,
              }}
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          ) : null}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
