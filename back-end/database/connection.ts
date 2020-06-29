import mysql from "mysql2/promise";

require("dotenv").config();

const dbConfig: object = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PW,
  database: process.env.DB_NAME,
};

const connection = mysql.createPool(dbConfig);

export default connection;
