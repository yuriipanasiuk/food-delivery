const httpError = require('http-errors');
const Mac = require('../models/mac');
const Basket = require('../models/basket');

const getGoods = async (req, res, next) => {
  try {
    const result = await Mac.find({});

    res.json(result);
  } catch (error) {
    next(error);
  }
};

const getGoodsById = async (req, res, next) => {
  const { goodId } = req.params;

  try {
    const good = await Mac.findById(goodId);

    if (!good) {
      return next(httpError(404, 'Not found'));
    }

    res.json(good);
  } catch (error) {
    next(error);
  }
};

const addGood = async (req, res, next) => {
  const { id } = req.body;

  try {
    const data = await Mac.findById(id);
    const isExist = await Basket.findOne({ title: data.title });

    if (isExist) {
      return next(httpError(400, 'Good already exist in basket'));
    }

    const result = await Basket.create({ title: data.title, url: data.url, price: data.price });

    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

const getBasketGoods = async (req, res, next) => {
  try {
    const result = await Basket.find({});
    res.json(result);
  } catch (error) {
    next(error);
  }
};

const deleteGood = async (req, res, next) => {
  const { id } = req.body;
  try {
    const good = await Basket.findByIdAndRemove(id);

    if (!good) {
      return next(httpError(404, 'Not found'));
    }

    res.json({ messahe: 'good deleted' });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getGoods,
  getGoodsById,
  addGood,
  deleteGood,
  getBasketGoods,
};
