const Sequelize = require("sequelize");

const db = new Sequelize("passport", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = db;
