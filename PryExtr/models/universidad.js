const Sequelize = require("sequelize");

const Universidad = (sequelize) => {
  sequelize.define("Universidad", {
    iduniversidad: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nombreUniversidad: Sequelize.STRING(60),
    paisUniversidad: Sequelize.STRING(60),
    descripcionUniversidad: Sequelize.STRING(60),
  });
};

module.exports = Universidad;
