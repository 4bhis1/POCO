import React from "react";

function PrivacyPolicy() {
  return (
    <section
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "40px 20px",
        color: "#ffffff",
        fontFamily: '"Arial", sans-serif',
      }}
    >
      <div
        style={{
          // textAlign: "center",
          padding: "20px",
          backgroundColor: "#2c2c2c",
          borderRadius: "8px",
          marginBottom: "30px",
          flexDirection: "column",
        }}
      >
        <h1
          style={{
            fontSize: "2.5rem",
            color: "#00ffcc",
            marginBottom: "1px",
            textShadow: "0 2px 4px rgba(0, 255, 204, 0.3)",
          }}
        >
          Privacy Policy
        </h1>
        <p
          style={{
            fontSize: "1rem",
            color: "#b0b0b0",
            lineHeight: "1.6",
          }}
        >
          Last updated: February 22, 2025
        </p>
      </div>

      <div
        style={{
          backgroundColor: "#2c2c2c",
          padding: "20px",
          borderRadius: "8px",
          marginBottom: "20px",
          flexDirection: "column",
        }}
      >
        <h2
          style={{
            fontSize: "1.8rem",
            color: "#00ffcc",
            marginBottom: "15px",
          }}
        >
          Data Collection
        </h2>
        <p
          style={{
            fontSize: "1rem",
            color: "#b0b0b0",
            lineHeight: "1.6",
          }}
        >
          We collect information you provide directly, such as your email
          address during newsletter sign-ups, and data from connected coding
          platforms (e.g., GitHub, LeetCode) to track and display your coding
          streaks.
        </p>
      </div>

      <div
        style={{
          backgroundColor: "#2c2c2c",
          padding: "20px",
          borderRadius: "8px",
          marginBottom: "20px",
          flexDirection: "column",
        }}
      >
        <h2
          style={{
            fontSize: "1.8rem",
            color: "#00ffcc",
            marginBottom: "15px",
          }}
        >
          Data Usage
        </h2>
        <p
          style={{
            fontSize: "1rem",
            color: "#b0b0b0",
            lineHeight: "1.6",
          }}
        >
          Your data is used to maintain your coding streaks, provide
          personalized analytics, and send occasional updates or reminders. We
          do not sell your personal information to third parties.
        </p>
      </div>

      <div
        style={{
          backgroundColor: "#2c2c2c",
          padding: "20px",
          borderRadius: "8px",
          marginBottom: "20px",
          flexDirection: "column",
        }}
      >
        <h2
          style={{
            fontSize: "1.8rem",
            color: "#00ffcc",
            marginBottom: "15px",
          }}
        >
          Data Sharing
        </h2>
        <p
          style={{
            fontSize: "1rem",
            color: "#b0b0b0",
            lineHeight: "1.6",
          }}
        >
          We may share aggregated, anonymized data for research or marketing
          purposes, but we will never share your personal identifiable
          information with third parties without your explicit consent, except
          as required by law.
        </p>
      </div>

      <div
        style={{
          backgroundColor: "#2c2c2c",
          padding: "20px",
          borderRadius: "8px",
          marginBottom: "20px",
          flexDirection: "column",
        }}
      >
        <h2
          style={{
            fontSize: "1.8rem",
            color: "#00ffcc",
            marginBottom: "15px",
          }}
        >
          Your Rights
        </h2>
        <p
          style={{
            fontSize: "1rem",
            color: "#b0b0b0",
            lineHeight: "1.6",
          }}
        >
          You have the right to request access to, correction of, or deletion of
          your personal data. To exercise these rights, please contact us at{" "}
          <a
            href="mailto:absk8634@gmail.com"
            style={{
              color: "#00ffcc",
              textDecoration: "none",
              transition: "color 0.3s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#00ff99")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#00ffcc")}
          >
            absk8634@gmail.com
          </a>
          .
        </p>
      </div>

      <div
        style={{
          backgroundColor: "#2c2c2c",
          padding: "20px",
          borderRadius: "8px",
          flexDirection: "column",
        }}
      >
        <h2
          style={{
            fontSize: "1.8rem",
            color: "#00ffcc",
            marginBottom: "15px",
          }}
        >
          Contact Us
        </h2>
        <p
          style={{
            fontSize: "1rem",
            color: "#b0b0b0",
            lineHeight: "1.6",
          }}
        >
          If you have any questions about this Privacy Policy, please reach out
          to us at{" "}
          <a
            href="mailto:absk8634@gmail.com"
            style={{
              color: "#00ffcc",
              textDecoration: "none",
              transition: "color 0.3s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#00ff99")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#00ffcc")}
          >
            absk8634@gmail.com
          </a>
          .
        </p>
      </div>
    </section>
  );
}

export default PrivacyPolicy;
