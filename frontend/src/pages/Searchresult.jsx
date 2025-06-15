import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Searchresult = () => {
  const query = useQuery();
  const q = query.get("q");

  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!q) {
      setResults(null);
      return;
    }

    const fetchResults = async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await axios.get(`/api/search?q=${encodeURIComponent(q)}`);
        setResults(res.data);
      } catch (err) {
        setError("Failed to fetch results.");
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, [q]);

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">Search Results for "{q}"</h1>

      {loading && <p>Loading results...</p>}
      {error && <p className="text-red-600">{error}</p>}

      {!loading && results && (
        <>
          {/* Blogs */}
          {results.blogs && results.blogs.length > 0 && (
            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Blogs</h2>
              <ul className="list-disc list-inside space-y-1">
                {results.blogs.map((blog) => (
                  <li key={blog._id}>
                    <a href={`/blog/${blog.slug}`} className="text-blue-600 hover:underline">
                      {blog.title}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* FAQs */}
          {results.faqs && results.faqs.length > 0 && (
            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-2">FAQs</h2>
              <ul className="list-disc list-inside space-y-1">
                {results.faqs.map((faq) => (
                  <li key={faq._id}>
                    <strong>{faq.question}</strong>
                    <p>{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* No results */}
          {results.blogs.length === 0 && results.faqs.length === 0 && (
            <p>No results found.</p>
          )}
        </>
      )}

      {!loading && !results && <p>Please enter a search query.</p>}
    </div>
  );
};

export default Searchresult;
