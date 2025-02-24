import React from "react";

function UpcomingFeatures() {
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
          textAlign: "center",
          padding: "20px",
          backgroundColor: "#2c2c2c",
          borderRadius: "8px",
          marginBottom: "30px",
        }}
      >
        <h1
          style={{
            fontSize: "2.5rem",
            color: "#00ffcc",
            marginBottom: "15px",
            textShadow: "0 2px 4px rgba(0, 255, 204, 0.3)",
          }}
        >
          Upcoming Features
        </h1>
        <p
          style={{
            fontSize: "1.1rem",
            lineHeight: "1.6",
            color: "#b0b0b0",
          }}
        >
          We’re working hard to make <strong>PO-CO</strong> even better! Here’s
          what’s coming soon:
        </p>
      </div>

      <ul
        style={{
          listStyleType: "none",
          padding: 0,
          display: "grid",
          gap: "15px",
        }}
      >
        <li
          style={{
            backgroundColor: "#3a3a3a",
            padding: "15px",
            borderRadius: "4px",
            borderLeft: "4px solid #00ffcc",
            fontSize: "1rem",
            color: "#b0b0b0",
            lineHeight: "1.6",
            transition: "transform 0.2s, background-color 0.2s",
            cursor: "default",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateX(5px)";
            e.currentTarget.style.backgroundColor = "#444444";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateX(0)";
            e.currentTarget.style.backgroundColor = "#3a3a3a";
          }}
        >
          Integration with more platforms (e.g., HackerRank, Codecademy)
        </li>
        <li
          style={{
            backgroundColor: "#3a3a3a",
            padding: "15px",
            borderRadius: "4px",
            borderLeft: "4px solid #00ffcc",
            fontSize: "1rem",
            color: "#b0b0b0",
            lineHeight: "1.6",
            transition: "transform 0.2s, background-color 0.2s",
            cursor: "default",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateX(5px)";
            e.currentTarget.style.backgroundColor = "#444444";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateX(0)";
            e.currentTarget.style.backgroundColor = "#3a3a3a";
          }}
        >
          Gamification: Earn points and compete with friends
        </li>
        <li
          style={{
            backgroundColor: "#3a3a3a",
            padding: "15px",
            borderRadius: "4px",
            borderLeft: "4px solid #00ffcc",
            fontSize: "1rem",
            color: "#b0b0b0",
            lineHeight: "1.6",
            transition: "transform 0.2s, background-color 0.2s",
            cursor: "default",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateX(5px)";
            e.currentTarget.style.backgroundColor = "#444444";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateX(0)";
            e.currentTarget.style.backgroundColor = "#3a3a3a";
          }}
        >
          Mobile app for on-the-go streak tracking
        </li>
        <li
          style={{
            backgroundColor: "#3a3a3a",
            padding: "15px",
            borderRadius: "4px",
            borderLeft: "4px solid #00ffcc",
            fontSize: "1rem",
            color: "#b0b0b0",
            lineHeight: "1.6",
            transition: "transform 0.2s, background-color 0.2s",
            cursor: "default",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateX(5px)";
            e.currentTarget.style.backgroundColor = "#444444";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateX(0)";
            e.currentTarget.style.backgroundColor = "#3a3a3a";
          }}
        >
          Custom dashboards with advanced analytics
        </li>
        <li
          style={{
            backgroundColor: "#3a3a3a",
            padding: "15px",
            borderRadius: "4px",
            borderLeft: "4px solid #00ffcc",
            fontSize: "1rem",
            color: "#b0b0b0",
            lineHeight: "1.6",
            transition: "transform 0.2s, background-color 0.2s",
            cursor: "default",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateX(5px)";
            e.currentTarget.style.backgroundColor = "#444444";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateX(0)";
            e.currentTarget.style.backgroundColor = "#3a3a3a";
          }}
        >
          Community features to share streaks and tips
        </li>
      </ul>

      <p
        style={{
          fontSize: "1.1rem",
          color: "#b0b0b0",
          textAlign: "center",
          marginTop: "30px",
          padding: "15px",
          backgroundColor: "#2c2c2c",
          borderRadius: "8px",
        }}
      >
        Stay tuned for these exciting updates!
      </p>
    </section>
  );
}

export default UpcomingFeatures;
