const { model, Schema } = require('mongoose');

const userSchema = new Schema(
  {
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

const User = model('user', userSchema);

module.exports = User;
