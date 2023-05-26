const express = require('express');
const router = express.Router();

const { getDrinks, getDrinkById } = require('../../controllers/goodsController');

router.get('/', getDrinks);
router.get('/:drinkId', getDrinkById);

module.exports = router;
