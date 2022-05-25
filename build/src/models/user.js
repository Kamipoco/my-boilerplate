"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../config/database");

var User = _database.db.define("User", {
  name: {
    type: _sequelize["default"].STRING,
    allowNull: {
      args: false,
      msg: "Please enter your name"
    }
  },
  email: {
    type: _sequelize["default"].STRING,
    allowNull: {
      args: false,
      msg: "Please enter your email address"
    },
    unique: {
      args: true,
      msg: "Email already exists"
    },
    validate: {
      isEmail: {
        args: true,
        msg: "Please enter a valid email address"
      }
    }
  },
  password: {
    type: _sequelize["default"].STRING,
    allowNull: {
      args: false,
      msg: "Please enter a password"
    },
    validate: {
      isNotShort: function isNotShort(value) {
        if (value.length < 8) {
          throw new Error("Password should be at least 8 characters");
        }
      }
    }
  },
  address: {
    type: _sequelize["default"].STRING,
    allowNull: true
  }
}, {});

module.exports = User;