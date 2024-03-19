import { Model, DataTypes } from 'sequelize';
import { sequelizeConfig } from '../sequelize-config';

class Buyer extends Model {
  public id!: number; 
  public name!: string;
  public companyName!: string;
}

Buyer.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: new DataTypes.STRING(128),
    allowNull: false,
  },
  companyName: {
    type: new DataTypes.STRING(128),
    allowNull: false,
  }
}, {
  tableName: 'buyer',
  sequelize: sequelizeConfig,
  timestamps: false
});

export default Buyer;