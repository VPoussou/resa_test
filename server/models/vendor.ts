import { Model, DataTypes } from 'sequelize';
import { sequelizeConfig } from '../sequelize-config';

class Vendor extends Model {
  public id!: number; 
  public name!: string;
}

Vendor.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: new DataTypes.STRING(128),
    allowNull: false,
  }
  },
 {
  tableName: 'buyer',
  sequelize: sequelizeConfig,
  timestamps: false
});

export default Vendor;