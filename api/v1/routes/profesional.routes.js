const express = require('express');
const router = express.Router();

// http://localhost:3000/profesional?page=23&sector=tomografia
router.get('/', (req, res) => {
  const { page, sector } = req.query;
  res.json({
    page,
    sector,
  });
});

module.exports = router;
