import React, { useState } from "react";

function Home() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Thanks for signing up, ${email}! We'll keep you posted on PO-CO updates.`
    );
    setEmail("");
  };

  return (
    <section>
      <h1>🚀 Track Your Coding Streaks Across Platforms! 🌟</h1>
      <p>
        Are you a passionate coder who loves to maintain streaks but finds it
        challenging to keep track across multiple platforms? Say hello to{" "}
        <strong>PO-CO (Pookie-Coder)</strong> — a revolutionary tool designed
        for developers who code everywhere!
      </p>
      <h2>💻 What is PO-CO?</h2>
      <p>
        PO-CO is a centralized platform that monitors and maintains your coding
        streaks across various coding platforms, repositories, and learning
        portals. Whether you're contributing to GitHub, solving problems on
        LeetCode, exploring projects on CodePen, or sharpening skills on BFE,
        PO-CO keeps your streaks unified and up-to-date.
      </p>
      <h2>📊 Key Features</h2>
      <ul>
        <li>
          <strong>Multi-Platform Integration:</strong> Seamlessly connect with
          popular coding platforms.
        </li>
        <li>
          <strong>Real-Time Streak Synchronization:</strong> Automatically sync
          your coding activities.
        </li>
        <li>
          <strong>Customizable Streak Goals:</strong> Define what a "coding day"
          means to you — commits, challenges, or projects.
        </li>
        <li>
          <strong>Insightful Analytics:</strong> Visualize progress with charts,
          leaderboards, and heatmaps.
        </li>
        <li>
          <strong>Motivation & Rewards:</strong> Earn badges, challenges, and
          reminders to keep your streak alive.
        </li>
      </ul>
      <h2>🌟 Why PO-CO?</h2>
      <p>
        Coding isn’t limited to one platform, and neither should your streaks
        be! PO-CO celebrates your dedication and consistency, no matter where
        you code.
      </p>
      <p>
        <strong>💡 Coming Soon!</strong> Sign up for updates and exclusive beta
        invites:
      </p>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />
        <button type="submit">Stay Updated</button>
      </form>
    </section>
  );
}

export default Home;
