const express = require('express');
const router = express.Router();
const Article = require('../../models/Articles');

// @route GET api/articles
// @description Get all articles
// @access Public
router.get('/', (req, res) => {
  Article.find()
    .then(articles => res.json(articles))
    .catch(err => res.status(404).json({ noarticlesfound: 'No Articles found' }));
});

// @route POST api/articles
// @description Add a new article
// @access Public
router.post('/', (req, res) => {
  Article.create(req.body)
    .then(article => res.json({ msg: 'Article added successfully' }))
    .catch(err => {
      console.error(err); // Log the actual error
      res.status(400).json({ error: 'Unable to add this article' });
    });
});

module.exports = router;
