/*import { Sequelize } from 'sequelize';
import mysql2 from 'mysql2';

// Create a connection pool (adjust the configuration as needed)
const pool = mysql2.createPool({
    host: 'localhost',
    user: 'fyp',
    password: 'password',
    database: 'fypproject',
    port: 3000,
});

// Create a Sequelize instance using the connection pool
const sequelize = new Sequelize({
    dialect: 'mysql',
    dialectModule: mysql2,
    pool: pool
});*/
module.exports = {
  host: "localhost",
  user: "root",
  password: "password",
  db: "fypproject",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};