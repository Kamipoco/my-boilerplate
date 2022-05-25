"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.db = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _dotenv = require("dotenv");

(0, _dotenv.config)();
var db = new _sequelize["default"](process.env.DB_NAME || "bookshop", process.env.DB_USER || "postgres", process.env.DB_PASS || "Vanlam@020499", {
  dialect: "postgres",
  host: process.env.DB_HOST || "localhost",
  port: 5432
});
exports.db = db;
db.authenticate().then(function () {
  return console.log("Connected to database successfully");
})["catch"](function (err) {
  return console.log(err);
});