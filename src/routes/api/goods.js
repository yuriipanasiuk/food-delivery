const express = require('express');
const router = express.Router();
const validation = require('../../schema/validation');
const { goodValidatioSchema } = require('../../schema/validationSchema');

const {
  getGoods,
  getGoodsById,
  addGood,
  deleteGood,
} = require('../../controllers/goodsController');

router.get('/', getGoods);
router.get('/:goodId', getGoodsById);
router.post('/', validation(goodValidatioSchema), addGood);
router.delete('/', deleteGood);

module.exports = router;
