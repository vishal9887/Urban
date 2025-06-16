import { useState } from "react";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    category: "general_queries",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (response.ok) {
        alert('✅ Form submitted & email sent successfully!');
        setForm({
          name: '',
          email: '',
          subject: '',
          message: '',
          category: 'general_queries',
        });
      } else {
        alert('❌ Submission failed: ' + (data.error || 'Unknown error'));
      }
    } catch (err) {
      alert('❌ Network error: ' + err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-4">
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        className="w-full mb-2 p-2"
        onChange={handleChange}
        value={form.name}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        className="w-full mb-2 p-2"
        onChange={handleChange}
        value={form.email}
        required
      />
      <input
        type="text"
        name="subject"
        placeholder="Subject"
        className="w-full mb-2 p-2"
        onChange={handleChange}
        value={form.subject}
        required
      />
      <textarea
        name="message"
        placeholder="Message"
        className="w-full mb-2 p-2"
        onChange={handleChange}
        value={form.message}
        required
      />
      <select
        name="category"
        className="w-full mb-2 p-2"
        onChange={handleChange}
        value={form.category}
      >
        <option value="general_queries">General Queries</option>
        <option value="package_service_queries">Package/Service Queries</option>
        <option value="internship_queries">Internship Queries</option>
      </select>
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
