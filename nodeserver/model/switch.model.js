module.exports = (sequelize, Sequelize) => {
    const switchfan = sequelize.define("switchfan", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      switchValue: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },

    });
  
    return switchfan;
  };