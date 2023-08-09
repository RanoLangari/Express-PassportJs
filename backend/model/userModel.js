const db = require("../config/database.js");
const sequelize = require("sequelize");

const { DataTypes } = sequelize;

const User = db.define(
  "tbl_user",
  {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

module.exports = User;

(async () => {
  db.sync();
})();
