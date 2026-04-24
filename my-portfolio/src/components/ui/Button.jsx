import { useState } from "react";

const sizeStyles = {
  sm: { padding: "10px 20px", fontSize: "0.875rem" },
  md: { padding: "14px 32px", fontSize: "1rem" },
  lg: { padding: "16px 40px", fontSize: "1.05rem" },
};

function getVariantStyles(variant, dark) {
  if (variant === "outline") {
    return {
      background: "transparent",
      color: "#6C63FF",
      border: "1px solid #6C63FF",
      boxShadow: "none",
    };
  }

  if (variant === "ghost") {
    return {
      background: "transparent",
      color: dark ? "rgba(235, 235, 245, 0.75)" : "rgba(34, 38, 56, 0.7)",
      border: "1px solid transparent",
      boxShadow: "none",
    };
  }

  return {
    background: "linear-gradient(90deg, #6C63FF, #5a54e0)",
    color: "#ffffff",
    border: "1px solid transparent",
    boxShadow: "0 10px 24px rgba(108, 99, 255, 0.35)",
  };
}

function Button({
  children,
  variant = "primary",
  onClick,
  href,
  size = "md",
  className = "",
  dark = true,
  type = "button",
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const baseStyle = {
    ...sizeStyles[size],
    ...getVariantStyles(variant, dark),
    borderRadius: "9999px",
    fontWeight: 700,
    cursor: "pointer",
    textDecoration: "none",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    lineHeight: 1,
    transition: "all 0.2s ease",
    transform: isActive ? "translateY(0) scale(0.98)" : isHovered ? "translateY(-2px)" : "translateY(0)",
    boxShadow:
      variant === "primary" && isHovered
        ? "0 14px 30px rgba(108, 99, 255, 0.45)"
        : getVariantStyles(variant, dark).boxShadow,
  };

  const commonProps = {
    className,
    onClick,
    style: baseStyle,
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => {
      setIsHovered(false);
      setIsActive(false);
    },
    onMouseDown: () => setIsActive(true),
    onMouseUp: () => setIsActive(false),
  };

  if (href) {
    return (
      <a href={href} {...commonProps}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} {...commonProps}>
      {children}
    </button>
  );
}

export default Button;
