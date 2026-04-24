function ThemeToggle({ dark, onToggle }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label="Toggle theme"
      role="button"
      style={{
        border: "none",
        borderRadius: "9999px",
        width: "52px",
        height: "32px",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        background: dark ? "rgba(255, 255, 255, 0.18)" : "rgba(10, 10, 20, 0.18)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        transition:
          "background-color 0.3s ease, transform 0.2s ease, box-shadow 0.2s ease",
      }}
      onMouseEnter={(event) => {
        event.currentTarget.style.transform = "scale(1.05)";
        event.currentTarget.style.boxShadow = dark
          ? "0 8px 20px rgba(0, 0, 0, 0.25)"
          : "0 8px 20px rgba(0, 0, 0, 0.15)";
      }}
      onMouseLeave={(event) => {
        event.currentTarget.style.transform = "scale(1)";
        event.currentTarget.style.boxShadow = "none";
      }}
      onMouseDown={(event) => {
        event.currentTarget.style.transform = "scale(0.95)";
      }}
      onMouseUp={(event) => {
        event.currentTarget.style.transform = "scale(1.05)";
      }}
    >
      <span style={{ fontSize: "16px", lineHeight: 1 }}>{dark ? "☀️" : "🌙"}</span>
    </button>
  );
}

export default ThemeToggle;
