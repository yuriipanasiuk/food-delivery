const express = require('express');
const cors = require('cors');
const logger = require('morgan');
require('dotenv').config();

const goodsRouter = require('./routes/api/goods');
const basketRouter = require('./routes/api/basket');
const orderRouter = require('./routes/api/order');
const drinkRouter = require('./routes/api/drinks');

const app = express();
const formatLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(express.json());
app.use(cors());
app.use(logger(formatLogger));

app.use('/api/goods', goodsRouter);
app.use('/api/basket', basketRouter);
app.use('/api/order', orderRouter);
app.use('/api/drink', drinkRouter);

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' });
});

app.use((err, req, res, next) => {
  const { status = 500 } = err;
  res.status(status).json({ message: err.message });
});

module.exports = app;
