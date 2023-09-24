const Sequelise = require("sequelize");

const sequelize = require("../util/database");

const User = sequelize.define("user", {
  id: {
    type: Sequelise.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelise.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelise.STRING,
    allowNull: false,
    unique: true,
  },
  phone: {
    type: Sequelise.STRING,
    allowNull: false,
    unique: true,
  },
  appointmentTime: {
    type: Sequelise.DATE,
    allowNull: true,
  },
  message: { type: Sequelise.STRING },
});

module.exports = User;
