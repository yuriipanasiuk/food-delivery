const express = require('express');
const router = express.Router();
// const validation = require('../../schema/validation');
// const { goodValidatioSchema } = require('../../schema/validationSchema');
// validation(goodValidatioSchema),

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
