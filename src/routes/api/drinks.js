const express = require('express');
const router = express.Router();

const { getDrinks } = require('../../controllers/goodsController');

router.get('/', getDrinks);

module.exports = router;
