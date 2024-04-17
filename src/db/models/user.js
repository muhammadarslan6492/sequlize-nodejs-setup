/* eslint-disable comma-dangle */
import { DataTypes } from 'sequelize';

const UserModel = (sequelize) => {
  const user = sequelize.define(
    'Users',
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
      tableName: 'users',
    }
  );
  return user;
};

export default UserModel;
