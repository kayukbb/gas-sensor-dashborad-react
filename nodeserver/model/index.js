const dbConfig = require("../db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.db, dbConfig.user, dbConfig.password, {
  host: dbConfig.host,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.gasreading = require("./gasreading.model.js")(sequelize, Sequelize);
db.switchvalue = require("./switch.model.js")(sequelize, Sequelize);
db.fanspeed = require("./fan.model.js")(sequelize, Sequelize);
module.exports = db;