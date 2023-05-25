const express = require('express');
const router = express.Router();

const {
  getBasketGoods,
  updateGoodPrice,
  clearBasket,
} = require('../../controllers/goodsController');

router.get('/', getBasketGoods);
router.get('/:goodId', updateGoodPrice);
router.delete('/', clearBasket);

module.exports = router;
