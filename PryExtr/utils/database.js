//Configuración de sequelize
const Sequelize = require("sequelize");
const { applyRelations } = require("./relations");
//objeto de conexión

const sequelize = new Sequelize('Inv','admin','Ja1mesda.', {
  dialect: "mysql",
  host: "database-1.c5yh6twdnv7w.us-east-1.rds.amazonaws.com",
  dialectOptions: {
    options: {
      //Características especiales de la conexión
    },
  },
  define: {
    timestamps: false,
    freezeTableName: true,
  },
});

//Cargar los modelos
const modelDefiners = [
  require("../models/universidad"),
  require("../models/investigador"),
  require("../models/proyectoDoctorado"),
];

//Adherir los modelos al objeto de conexion
for (const modelDefiner of modelDefiners) {
  modelDefiner(sequelize);
}

//Generar las relaciones entre las tablas
applyRelations(sequelize);

//Exportar el objeto sequelize

module.exports = sequelize;

