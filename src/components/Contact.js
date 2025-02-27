import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import "../styles/Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [formVisible, setFormVisible] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID, 
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID, 
        {
          user_name: formData.name,
          user_email: formData.email,
          user_message: formData.message,
        },
        process.env.REACT_APP_EMAILJS_USER_ID 
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
          setFormVisible(false); // Hide form after sending
        },
        () => {
          setStatus("Failed to send message.");
        }
      );
  };

  // Reset form visibility when the user navigates back
  useEffect(() => {
    setFormVisible(true);
    setStatus("");
  }, []); // Run once when component mounts

  return (
    <div className="contact">
      <h2>Contact</h2>
      {formVisible ? (
        <form onSubmit={handleSubmit} className={formVisible ? "" : "hidden"}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit">Send Message</button>
        </form>
      ) : (
        <p className="sent-message">{status}</p>
      )}
    </div>
  );
}

export default Contact;
