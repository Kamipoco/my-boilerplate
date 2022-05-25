"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signJWT = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _dotenv = require("dotenv");

(0, _dotenv.config)();

var signJWT = function signJWT(user) {
  var jwtUser = _jsonwebtoken["default"].sign({
    payload: user
  }, process.env.SECRET_KEY, {
    expiresIn: process.env.TOKEN_EXPIRETIME
  });

  return jwtUser;
};

exports.signJWT = signJWT;