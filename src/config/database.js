import Sequelize from "sequelize";
import { config } from "dotenv";

config();

export const db = new Sequelize(
  process.env.DB_NAME || "bookshop",
  process.env.DB_USER || "postgres",
  process.env.DB_PASS || "Vanlam@020499",
  {
    dialect: "postgres",
    host: process.env.DB_HOST || "localhost",
    port: 5432,
  }
);

db.authenticate()
  .then(() => console.log("Connected to database successfully"))
  .catch((err) => console.log(err));
