import { Model, DataTypes } from 'sequelize';
import { sequelizeConfig } from '../sequelize-config';
import Vendor from './vendor';
import Buyer from './buyer';

class Appointment extends Model {
  public id!: number;
  public title!: string;
  public type!: string;
  public location!: string;
  public vendorId!: number;
  public buyerId!: number;
  public startTime!: Date;
  public endTime!: Date;
}

Appointment.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: new DataTypes.STRING(128),
    allowNull: false,
  },
  type: {
    type: new DataTypes.STRING(128),
    allowNull: false,
  },
  location: {
    type: new DataTypes.STRING(128),
    allowNull: true, // Assuming location can be null for virtual appointments
  },
  vendorId: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
  },
  buyerId: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
  },
  startTime: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  endTime: {
    type: DataTypes.DATE,
    allowNull: false,
  },
}, {
  tableName: 'appointments',
  sequelize: sequelizeConfig,
  timestamps: false
});

Vendor.hasMany(Appointment, {
  sourceKey: 'id',
  foreignKey: 'vendorId',
  as: 'appointments' // alias
});

Buyer.hasMany(Appointment, {
  sourceKey: 'id',
  foreignKey: 'buyerId',
  as: 'appointments' // alias
});

Appointment.belongsTo(Vendor, { targetKey: 'id', foreignKey: 'vendorId' });
Appointment.belongsTo(Buyer, { targetKey: 'id', foreignKey: 'buyerId' });

export default Appointment;