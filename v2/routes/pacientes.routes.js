const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  res.json({
    data: 'Soy la API versión 2',
  });
});

module.exports = router;
