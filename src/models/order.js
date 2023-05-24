const { model, Schema } = require('mongoose');

const orderSchema = new Schema(
  {
    data: {
      type: Array,
    },
    totalPrice: {
      type: Number,
    },
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    address: {
      type: String,
    },
  },
  { versionKey: false, timestamps: true }
);

const Order = model('order', orderSchema);

module.exports = Order;
