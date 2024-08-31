module.exports = (sequelize, Sequelize) => {
    const fan = sequelize.define("fan", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      fanspeed: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    });
  
    return fan;
  };