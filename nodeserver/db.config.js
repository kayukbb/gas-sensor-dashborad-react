/*import { Sequelize } from 'sequelize';
import mysql2 from 'mysql2';

// Create a connection pool (adjust the configuration as needed)
const pool = mysql2.createPool({
    host: 'localhost',
    user: 'fyp',
    password: 'password',
    database: 'fypproject',
    port: 3000,
});https://www.youtube.com/watch?v=L_vbvArDv1M&list=PL91gvBcdjUtbeAJEDWP_eEknED4el1afy&index=15

// Create a Sequelize instance using the connection pool
const sequelize = new Sequelize({
    dialect: 'mysql',
    dialectModule: mysql2,
    pool: pool
});*/
module.exports = {
  host: 'localhost',
  user: 'root',
  password: 'alan06021',
  db: 'gasSensor',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
