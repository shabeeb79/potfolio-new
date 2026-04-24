import { useEffect, useState } from "react";
import personalInfo from "../../data/personalInfo.js";
import { sendEmail } from "../../utils/emailService.js";

const initialFormState = {
  name: "",
  email: "",
  message: "",
};

function Contact({ dark }) {
  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [highlightForm, setHighlightForm] = useState(false);

  useEffect(() => {
    if (!isSuccess) return undefined;
    const timeoutId = window.setTimeout(() => {
      setIsSuccess(false);
    }, 4000);
    return () => window.clearTimeout(timeoutId);
  }, [isSuccess]);

  useEffect(() => {
    const handleOpenContact = () => {
      setHighlightForm(true);
      window.setTimeout(() => setHighlightForm(false), 1800);
    };
    window.addEventListener("open-contact", handleOpenContact);
    return () => window.removeEventListener("open-contact", handleOpenContact);
  }, []);

  const validateForm = () => {
    const nextErrors = {};
    if (!formData.name.trim()) nextErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      nextErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = "Enter a valid email address.";
    }
    if (!formData.message.trim()) nextErrors.message = "Message is required.";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validateForm()) return;

    try {
      setIsSubmitting(true);
      setErrors({});
      const result = await sendEmail(formData);
      if (result?.status === 200) {
        setFormData(initialFormState);
        setIsSuccess(true);
      } else {
        setErrors({ form: "Unable to send message right now. Please try again." });
      }
    } catch {
      setErrors({ form: "Unable to send message right now. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const infoPills = [
    { icon: "📍", text: personalInfo.location || "City, Country" },
    { icon: "📧", text: personalInfo.email || "your.email@example.com" },
  ];

  const inputStyle = {
    width: "100%",
    borderRadius: "12px",
    border: dark ? "1px solid rgba(255,255,255,0.12)" : "1px solid rgba(0,0,0,0.1)",
    background: dark ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.95)",
    color: dark ? "#eef0ff" : "#171a2d",
    padding: "12px 14px",
    outline: "none",
    transition: "border-color 0.2s ease, box-shadow 0.2s ease",
    font: "inherit",
  };

  return (
    <section id="contact" style={{ padding: "56px 20px 100px", position: "relative", zIndex: 1 }}>
      <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center" }}>
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
          Contact
        </p>
        <h2
          style={{
            margin: "8px 0 12px",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontFamily: "var(--font-display, 'Syne', sans-serif)",
            color: dark ? "#f3f4ff" : "#121427",
          }}
        >
          Let&apos;s build something amazing
        </h2>
        <p
          style={{
            margin: "0 auto 20px",
            maxWidth: "560px",
            lineHeight: 1.7,
            color: dark ? "rgba(236,238,255,0.72)" : "rgba(35,38,58,0.72)",
          }}
        >
          Have an idea, project, or collaboration in mind? I&apos;d love to hear about it
          and explore how we can work together.
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "10px",
            marginBottom: "20px",
          }}
        >
          {infoPills.map((pill) => (
            <span
              key={pill.text}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                borderRadius: "9999px",
                border: dark
                  ? "1px solid rgba(255,255,255,0.14)"
                  : "1px solid rgba(0,0,0,0.12)",
                padding: "8px 14px",
                color: dark ? "#e8ebff" : "#1f2340",
                background: dark ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.92)",
                fontSize: "0.9rem",
              }}
            >
              <span>{pill.icon}</span>
              <span>{pill.text}</span>
            </span>
          ))}
        </div>

        {isSuccess ? (
          <div
            style={{
              borderRadius: "18px",
              border: "1px solid rgba(0, 210, 160, 0.35)",
              background: dark ? "rgba(0, 210, 160, 0.12)" : "rgba(0, 210, 160, 0.08)",
              padding: "30px 24px",
            }}
          >
            <div style={{ fontSize: "2rem", marginBottom: "8px" }}>✅</div>
            <h3
              style={{
                margin: 0,
                color: dark ? "#edfff8" : "#0f3f30",
                fontFamily: "var(--font-display, 'Syne', sans-serif)",
              }}
            >
              Message Sent!
            </h3>
            <p
              style={{
                margin: "8px 0 0",
                color: dark ? "rgba(237,255,248,0.8)" : "rgba(15,63,48,0.8)",
              }}
            >
              Thanks for reaching out. I&apos;ll get back to you as soon as possible.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            style={{
              display: "grid",
              gap: "12px",
              textAlign: "left",
              background: dark ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.86)",
              border: dark
                ? "1px solid rgba(255,255,255,0.1)"
                : "1px solid rgba(0,0,0,0.08)",
              borderRadius: "20px",
              padding: "20px",
              boxShadow: highlightForm
                ? dark
                  ? "0 0 0 2px rgba(108,99,255,0.45), 0 16px 34px rgba(108,99,255,0.22)"
                  : "0 0 0 2px rgba(108,99,255,0.32), 0 14px 26px rgba(108,99,255,0.16)"
                : "none",
              transition: "box-shadow 0.3s ease",
            }}
          >
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              style={inputStyle}
              onFocus={(event) => {
                event.currentTarget.style.borderColor = "#6C63FF";
              }}
              onBlur={(event) => {
                event.currentTarget.style.borderColor = dark
                  ? "rgba(255,255,255,0.12)"
                  : "rgba(0,0,0,0.1)";
              }}
            />
            {errors.name ? (
              <p style={{ margin: "0 0 2px", color: "#ff6584", fontSize: "0.85rem" }}>
                {errors.name}
              </p>
            ) : null}

            <input
              name="email"
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              style={inputStyle}
              onFocus={(event) => {
                event.currentTarget.style.borderColor = "#6C63FF";
              }}
              onBlur={(event) => {
                event.currentTarget.style.borderColor = dark
                  ? "rgba(255,255,255,0.12)"
                  : "rgba(0,0,0,0.1)";
              }}
            />
            {errors.email ? (
              <p style={{ margin: "0 0 2px", color: "#ff6584", fontSize: "0.85rem" }}>
                {errors.email}
              </p>
            ) : null}

            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              style={{ ...inputStyle, resize: "vertical", minHeight: "120px" }}
              onFocus={(event) => {
                event.currentTarget.style.borderColor = "#6C63FF";
              }}
              onBlur={(event) => {
                event.currentTarget.style.borderColor = dark
                  ? "rgba(255,255,255,0.12)"
                  : "rgba(0,0,0,0.1)";
              }}
            />
            {errors.message ? (
              <p style={{ margin: "0 0 2px", color: "#ff6584", fontSize: "0.85rem" }}>
                {errors.message}
              </p>
            ) : null}
            {errors.form ? (
              <p style={{ margin: "0 0 2px", color: "#ff6584", fontSize: "0.85rem" }}>
                {errors.form}
              </p>
            ) : null}

            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                width: "100%",
                marginTop: "6px",
                border: "none",
                borderRadius: "9999px",
                padding: "14px 18px",
                color: "#fff",
                fontWeight: 700,
                cursor: isSubmitting ? "not-allowed" : "pointer",
                background: "linear-gradient(90deg, #6C63FF, #5a54e0)",
                boxShadow: "0 10px 22px rgba(108,99,255,0.36)",
                transition: "transform 0.2s ease, box-shadow 0.2s ease, opacity 0.2s ease",
                opacity: isSubmitting ? 0.8 : 1,
              }}
              onMouseEnter={(event) => {
                if (isSubmitting) return;
                event.currentTarget.style.transform = "translateY(-2px)";
                event.currentTarget.style.boxShadow = "0 14px 30px rgba(108,99,255,0.48)";
              }}
              onMouseLeave={(event) => {
                event.currentTarget.style.transform = "translateY(0)";
                event.currentTarget.style.boxShadow = "0 10px 22px rgba(108,99,255,0.36)";
              }}
            >
              {isSubmitting ? "Sending..." : "Send Message 🚀"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

export default Contact;
