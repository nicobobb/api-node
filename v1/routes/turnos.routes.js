const express = require('express');
const router = express.Router();

// http://localhost:3000/turnos?page=23
router.get('/', (req, res) => {
  const { page } = req.query;
  res.json({
    page,
  });
});

module.exports = router;
