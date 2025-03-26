const Joi = require('joi');

const userSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

const validateUser = (data) => {
  return userSchema.validate(data);
};

module.exports = { validateUser };
