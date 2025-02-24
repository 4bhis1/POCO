import React from "react";
import "./styles/Home.css"; // Assume this CSS file exists

function Home() {
  return (
    <section className="home-container">
      <div className="header-section">
        <h1 className="title">
          🚀 Track Your Coding Streaks Across Platforms! 🌟
        </h1>
        <p className="subtitle">
          Are you a passionate coder who loves to maintain streaks but finds it
          challenging to keep track across multiple platforms? Say hello to{" "}
          <strong>PO-CO (Pookie-Coder)</strong> — a revolutionary tool designed
          for developers who code everywhere!
        </p>
      </div>

      <div className="extension-cta-section">
        <div className="extension-card">
          <h2 className="extension-title">🌐 Get PO-CO Extension Now!</h2>
          <p className="extension-description">
            Supercharge your coding streaks with our browser extension! Track
            your activity seamlessly across platforms and never miss a day.
          </p>
          <a
            href="https://your-extension-url.com" // Replace with the actual extension URL
            target="_blank"
            rel="noopener noreferrer"
            className="extension-button"
          >
            Download Extension
          </a>
        </div>
      </div>

      <div className="content-section">
        <h2 className="section-title">💻 What is PO-CO?</h2>
        <p className="description">
          PO-CO is a centralized platform that monitors and maintains your
          coding streaks across various coding platforms, repositories, and
          learning portals. Whether you're contributing to GitHub, solving
          problems on LeetCode, exploring projects on CodePen, or sharpening
          skills on BFE, PO-CO keeps your streaks unified and up-to-date.
        </p>
      </div>

      <div className="features-section">
        <h2 className="section-title">📊 Key Features</h2>
        <ul className="features-list">
          <li className="feature-item">
            <strong>Multi-Platform Integration:</strong> Seamlessly connect with
            popular coding platforms.
          </li>
          <li className="feature-item">
            <strong>Real-Time Streak Synchronization:</strong> Automatically
            sync your coding activities.
          </li>
          <li className="feature-item">
            <strong>Customizable Streak Goals:</strong> Define what a "coding
            day" means to you — commits, challenges, or projects.
          </li>
          <li className="feature-item">
            <strong>Insightful Analytics:</strong> Visualize progress with
            charts, leaderboards, and heatmaps.
          </li>
          <li className="feature-item">
            <strong>Motivation & Rewards:</strong> Earn badges, challenges, and
            reminders to keep your streak alive.
          </li>
        </ul>
      </div>

      <div className="why-section">
        <h2 className="section-title">🌟 Why PO-CO?</h2>
        <p className="description">
          Coding isn’t limited to one platform, and neither should your streaks
          be! PO-CO celebrates your dedication and consistency, no matter where
          you code.
        </p>
      </div>
    </section>
  );
}

export default Home;
