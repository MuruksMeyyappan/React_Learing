const Joi = require("@hapi/joi");

const registerValidation = payload => {
  const schema = Joi.object({
    name: Joi.string()
      .min(6)
      .max(255)
      .required(),
    email: Joi.string()
      .min(6)
      .max(255)
      .email()
      .required(),
    password: Joi.string()
      .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
      .required(),
    age: Joi.number()
      .integer()
      .required(),
    dob: Joi.date().required(),
    currentAddress: Joi.string()
      .min(10)
      .max(255)
      .required(),
    permanentAddress: Joi.string()
      .min(6)
      .max(255)
      .required()
  });
  return schema.validate(payload);
};

const loginValidation = payload => {
  const schema = Joi.object({
    email: Joi.string()
      .min(6)
      .max(255)
      .email()
      .required(),
    password: Joi.string()
      .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
      .required()
  });
  return schema.validate(payload);
};

const postValidation = payload => {
  const schema = Joi.object({
    userId: Joi.string()
      .min(6)
      .max(255)
      .required(),
    post: Joi.string()
      .min(6)
      .max(6000)
      .required()
  });
  return schema.validate(payload);
};

module.exports = {
  registerValidation,
  loginValidation,
  postValidation
};
