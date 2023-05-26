const express = require('express');
const router = express.Router();

const {
  getGoods,
  getGoodsById,
  addGood,
  deleteGood,
} = require('../../controllers/goodsController');

router.get('/', getGoods);
router.get('/:goodId', getGoodsById);
router.post('/', addGood);
router.delete('/:goodId', deleteGood);

module.exports = router;
