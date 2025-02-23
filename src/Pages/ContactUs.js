import React, { useState } from "react";

function ContactUs() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your message has been sent. We'll get back to you at ${formData.email}.`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section>
      <h1>Contact Us</h1>
      <p>Have questions or feedback? Reach out to us!</p>
      <p>Email: <a href="mailto:info@poco.com">info@poco.com</a></p>
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
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          rows="4"
          required
        />
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default ContactUs;