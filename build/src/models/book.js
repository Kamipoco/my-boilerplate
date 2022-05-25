"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default(sequelize, DataTypes) {
  var Book = sequelize.define("Book", {
    userId: {
      type: DataTypes.INTEGER,
      onDelete: "CASCADE",
      references: {
        model: "User",
        key: "id",
        as: "userId"
      }
    },
    title: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: "Please enter the title for your book"
      }
    },
    author: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: "Please enter an author"
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: "Please input a description"
      }
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: {
        args: false,
        msg: "Please input a quantity"
      }
    }
  }, {});

  Book.associate = function (models) {
    //1 - 1
    // associations can be defined here
    Book.belongsTo(models.User, {
      foreignKey: "userId",
      onDelete: "CASCADE"
    });
  };

  return User;
};

exports["default"] = _default;