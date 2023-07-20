const express = require('express');
const router = express.Router();

// Define your route handlers here
router.get('/', (req, res) => {
  res.send('This is the tour route!!!');
});

module.exports = router;
