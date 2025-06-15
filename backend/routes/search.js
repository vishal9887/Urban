const express = require('express');
const router = express.Router();

const Blog = require('../models/Blog');
const FAQ = require('../models/FAQ');
// Uncomment and use these if you have these models
// const Guide = require('../models/Guide');
// const Portfolio = require('../models/Portfolio');

// GET /api/search?q=keyword
router.get('/', async (req, res) => {
  const query = req.query.q;

  if (!query || query.trim() === '') {
    return res.status(400).json({ error: 'Search query is required.' });
  }

  try {
    const [blogs, faqs /*, guides, portfolios */] = await Promise.all([
      Blog.find({
        $or: [
          { title: new RegExp(query, 'i') },
          { content: new RegExp(query, 'i') },
        ],
      }).limit(5),

      FAQ.find({
        $or: [
          { question: new RegExp(query, 'i') },
          { answer: new RegExp(query, 'i') },
        ],
      }).limit(5),

      // Uncomment when you add these models and collections
      // Guide.find({
      //   $or: [
      //     { title: new RegExp(query, 'i') },
      //     { content: new RegExp(query, 'i') },
      //   ],
      // }).limit(5),

      // Portfolio.find({
      //   $or: [
      //     { title: new RegExp(query, 'i') },
      //     { description: new RegExp(query, 'i') },
      //   ],
      // }).limit(5),
    ]);

    res.json({
      blogs,
      faqs,
      // guides,
      // portfolios,
    });
  } catch (err) {
    console.error('Search error:', err);
    res.status(500).json({ error: 'Server error during search.' });
  }
});

module.exports = router;
