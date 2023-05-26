const express = require('express');
const router = express.Router();

const { getDrinks, getDrinkById, addDrinkToCart } = require('../../controllers/goodsController');

router.get('/', getDrinks);
router.post('/', addDrinkToCart);
router.get('/:drinkId', getDrinkById);

module.exports = router;
