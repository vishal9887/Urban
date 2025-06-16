import React, { useEffect, useState } from "react";

const FAQs = () => {
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api/faqs")  // Your backend FAQ API endpoint
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch FAQs");
        return res.json();
      })
      .then((data) => {
        setFaqs(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading FAQs...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h1>
      {faqs.map((faq) => (
        <div key={faq._id} className="mb-6 border-b pb-4">
          <h2 className="text-xl font-semibold mb-2">{faq.question}</h2>
          <p className="text-gray-700 whitespace-pre-line">{faq.answer}</p>
        </div>
      ))}
    </div>
  );
};

export default FAQs;
