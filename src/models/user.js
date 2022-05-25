import Sequelize from "sequelize";
import { db } from "../config/database";

const User = db.define(
  "User",
  {
    name: {
      type: Sequelize.STRING,
      allowNull: {
        args: false,
        msg: "Please enter your name",
      },
    },
    email: {
      type: Sequelize.STRING,
      allowNull: {
        args: false,
        msg: "Please enter your email address",
      },
      unique: {
        args: true,
        msg: "Email already exists",
      },
      validate: {
        isEmail: {
          args: true,
          msg: "Please enter a valid email address",
        },
      },
    },
    password: {
      type: Sequelize.STRING,
      allowNull: {
        args: false,
        msg: "Please enter a password",
      },
      validate: {
        isNotShort: (value) => {
          if (value.length < 8) {
            throw new Error("Password should be at least 8 characters");
          }
        },
      },
    },
    address: {
      type: Sequelize.STRING,
      allowNull: true,
    },
  },
  {}
);

module.exports = User;
