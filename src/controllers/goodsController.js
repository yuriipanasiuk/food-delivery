const httpError = require('http-errors');
const Mac = require('../models/mac');
const Basket = require('../models/basket');
const Order = require('../models/order');
const Drink = require('../models/drink');

const getGoods = async (req, res, next) => {
  try {
    const result = await Mac.find({});

    res.json(result);
  } catch (error) {
    next(error);
  }
};

const getDrinks = async (req, res, next) => {
  try {
    const result = await Drink.find({});

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
  const { goodId } = req.params;
  try {
    const good = await Basket.findByIdAndRemove(goodId);

    if (!good) {
      return next(httpError(404, 'Not found'));
    }

    res.json({ message: 'good deleted' });
  } catch (error) {
    next(error);
  }
};

const submitGoods = async (req, res, next) => {
  const { name, email, phone, address, totalPrice } = req.body;
  try {
    const basketGoods = await Basket.find({});

    if (!basketGoods) {
      return next(httpError(404, 'Basket is empty'));
    }

    const isExisy = await Order.findOne({ email });

    if (isExisy) {
      return next(httpError(400, 'Good already submitted'));
    }

    const makeOrder = await Order.create({
      name,
      email,
      phone,
      address,
      totalPrice,
      data: basketGoods,
    });

    res.json(makeOrder);
  } catch (error) {
    next(error);
  }
};

const getOrderHistory = async (req, res, next) => {
  try {
    const result = await Order.find({});

    res.json(result);
  } catch (error) {
    next(error);
  }
};

const updateGoodPrice = async (req, res, next) => {
  const { goodId } = req.params;

  try {
    const result = await Basket.findByIdAndUpdate(goodId, req.body, { new: true });

    if (!result) {
      return next(httpError('404', 'Not found'));
    }

    res.json(result);
  } catch (error) {
    next(error);
  }
};

const clearBasket = async (req, res, next) => {
  try {
    await Basket.deleteMany({});

    res.json({ message: 'cart empty' });
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
  submitGoods,
  getOrderHistory,
  updateGoodPrice,
  clearBasket,
  getDrinks,
};
