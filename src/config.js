require("dotenv").config();

const config = {
  port: process.env.PORT || 9000,
  nodeEnv: process.env.NODE_ENV || "development",
  db: {
    username: process.env.DB_USER || "postgres",
    password: process.env.DB_PASS || "root",
    host: process.env.DB_HOST || "localhost",
    name: process.env.DB_NAME,
  },
};

module.exports = config;
