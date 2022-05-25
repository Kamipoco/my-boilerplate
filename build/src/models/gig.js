"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../config/database");

var Gig = _database.db.define("Gig", {
  title: {
    type: _sequelize["default"].STRING,
    allowNull: false
  },
  technology: {
    type: _sequelize["default"].STRING,
    allowNull: false
  }
});

module.exports = Gig;