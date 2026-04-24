function AnimatedText({
  text = "",
  type = "chars",
  delay = 0,
  className = "",
}) {
  const units = type === "words" ? text.split(" ") : Array.from(text);

  return (
    <span className={className}>
      {units.map((unit, index) => {
        const content =
          type === "chars"
            ? unit === " "
              ? "\u00A0"
              : unit
            : unit + (index < units.length - 1 ? "\u00A0" : "");

        return (
          <span
            key={`${unit}-${index}`}
            style={{
              display: "inline-block",
              animation: "fadeSlideUp 0.6s ease",
              animationDelay: `${delay + index * 0.05}s`,
              animationFillMode: "both",
            }}
          >
            {content}
          </span>
        );
      })}
    </span>
  );
}

export default AnimatedText;
