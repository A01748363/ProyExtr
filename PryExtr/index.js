//importar las bibliotecas
const express = require("express");
//Traer el objeto de conexion sequelize
const sequelize = require("./utils/database");
const path = require("path");
const universidadRoutes = require("./routes/universidad");
const investigadoresRoutes = require("./routes/investigadores");
const proyectosDoctoradoRoutes = require("./routes/proyectosDoctorado");

const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/universidad", universidadRoutes);
app.use("/investigadores", investigadoresRoutes);
app.use("/proyectosDoctorado", proyectosDoctoradoRoutes);


sequelize
  .sync()
  .then(() => {
    console.log("Conexión exitosa");
    //Lanzar la aplicación
    app.listen(8080, () => {
      console.log("Servidor en línea");
    });
  })
  .catch((error) => console.log(error));
