const express = require('express');
const router = express.Router();

const { getBasketGoods } = require('../../controllers/goodsController');

router.get('/', getBasketGoods);

module.exports = router;
