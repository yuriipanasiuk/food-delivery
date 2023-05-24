const Joi = require('joi');

const goodValidationSchema = Joi.object({
  id: Joi.string().required(),
});

const orderValidationSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
  address: Joi.string().required(),
});

module.exports = { goodValidationSchema, orderValidationSchema };
