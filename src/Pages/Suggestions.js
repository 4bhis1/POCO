import React, { useState } from "react";

function Suggestions() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    suggestion: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Thanks, ${formData.name}! We’ve received your suggestion: "${formData.suggestion}". We'll reach out to ${formData.email} if needed.`
    );
    setFormData({ name: "", email: "", suggestion: "" });
  };

  return (
    <section>
      <h1>Suggestions</h1>
      <p>
        We’d love to hear your ideas for PO-CO! Share your suggestions below:
      </p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
        />
        <textarea
          name="suggestion"
          value={formData.suggestion}
          onChange={handleChange}
          placeholder="Your Suggestion"
          rows="4"
          required
        />
        <button type="submit">Submit Suggestion</button>
      </form>
    </section>
  );
}

export default Suggestions;
