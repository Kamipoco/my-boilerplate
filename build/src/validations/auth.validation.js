"use strict";

var Joi = require("joi");

var _require = require("./customize.validation"),
    password = _require.password;

var loginSchema = {
  body: Joi.object().keys({
    email: Joi.string().required(),
    password: Joi.string().required()
  })
};
var logoutSchema = {
  body: Joi.object().keys({
    accessToken: Joi.string().required(),
    refreshToken: Joi.string().required()
  })
};
var registerSchema = {
  body: Joi.object().keys({
    displayName: Joi.string().required(),
    email: Joi.string().required().email(),
    password: Joi.string().required().custom(password)
  })
};
module.exports = {
  loginSchema: loginSchema,
  logoutSchema: logoutSchema,
  registerSchema: registerSchema
};