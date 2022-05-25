import Sequelize from "sequelize";
import { db } from "../config/database";

const Gig = db.define("Gig", {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  technology: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Gig;
