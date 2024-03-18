
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('resaTestDb', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
  });

module.exports = sequelize;