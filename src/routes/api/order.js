const express = require('express');
const router = express.Router();

const { submitGoods, getOrderHistory } = require('../../controllers/goodsController');

router.post('/', submitGoods);
router.get('/', getOrderHistory);

module.exports = router;
