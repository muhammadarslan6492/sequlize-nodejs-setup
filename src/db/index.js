/* eslint-disable comma-dangle */
import { Sequelize } from 'sequelize';
import { config } from 'dotenv';
import { UserModel, CarModel } from './models/index';

config();

const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    logging: true,
  }
);

const connect = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    await sequelize.sync({ alter: true }); // Be cautious with this in production
  } catch (err) {
    console.error('Unable to connect to the database:', err.message);
    process.exit(1); // Consider handling errors without exiting where possible
  }
};

const User = UserModel(sequelize);
const Car = CarModel(sequelize);

User.hasMany(Car, {
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
  foreignKey: 'userId',
  as: 'vehicles',
});
Car.belongsTo(User, {
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
  foreignKey: 'userId',
  as: 'owner',
});

export default { connect, User, Car };
