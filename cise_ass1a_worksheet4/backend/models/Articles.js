const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  authors: {
    type: [String],
  },
  source: {
    type: String,
    required: true
  },
  publication_year: { // Changed to match JSON key
    type: Number,
    required: true
  },
  doi: {
    type: String,
  },
  summary: {
    type: String,
  },
  linked_discussion: {
    type: String,
  },
  updated_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Article = mongoose.model('article', ArticleSchema);
