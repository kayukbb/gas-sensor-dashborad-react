module.exports = (sequelize, Sequelize) => {

const gasreading = sequelize.define("gasreading", 
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    reading1: {
      type: Sequelize.FLOAT,
      allowNull: false,
    },
    reading2: {
      type: Sequelize.FLOAT,
      allowNull: false,
    },
    reading3: {
      type: Sequelize.FLOAT,
      allowNull: false,
    },
    reading4: {
      type: Sequelize.FLOAT,
      allowNull: false,
    },
  });

  return gasreading;
}