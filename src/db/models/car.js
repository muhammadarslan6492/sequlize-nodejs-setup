/* eslint-disable comma-dangle */
import { DataTypes } from 'sequelize';

const CarModel = (sequelize) => {
  const car = sequelize.define(
    'Cars',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
    },

    {
      tableName: 'cars',
    }
  );
  return car;
};

export default CarModel;
