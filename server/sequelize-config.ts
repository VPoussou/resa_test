
import { Sequelize } from 'sequelize';

const sequelizeConfig: Sequelize = new Sequelize('resaTestDb', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
  });

export {sequelizeConfig};