const path = require("path");
const ProyectoDoctorado = require("../utils/database").models.ProyectoDoctorado;


exports.getProyectosDoctorado = (__req, res) => {
  ProyectoDoctorado.findAll()
    .then((investigadores) => {
      console.log("ProyectoDoctorado", investigadores);
      res.send(investigadores);
    })
    .catch((e) => {
      console.log(e);
      res.send({ Error: e });
    });
};


exports.createProyectosDoctorado = (req, res) => {
  console.log(req.body);
  ProyectoDoctorado.create(req.body)
    .then((__res) => {
      res.send("Registro exitoso");
    })
    .catch((error) => {
      res.send({ error: error });
    });
};


exports.storeProyectosDoctorado = (req, res) => {
  console.log(req.body);
  ProyectoDoctorado.create(req.body)
    .then((__res) => {
      res.send("Registro exitoso");
    })
    .catch((error) => {
      res.send({ error: error });
    });
};


exports.updateProyectosDoctorado = async (req, res) => {
  const investigadorAActualizar = await ProyectoDoctorado.findOne({
    where: {
      idinvestigador: req.body.idinvestigador,
    },
  });

  if (investigadorAActualizar) {
    ProyectoDoctorado.update(req.body, {
      where: {
        idinvestigador: req.body.idinvestigador,
      },
    })
      .then(() => {
        console.log("ProyectoDoctorado actualizado");
        res.send("ProyectoDoctorado actualizado");
      })
      .catch((e) => {
        console.log(e);
        res.send({ Error: e });
      });
  } else {
    res.send({ Error: "No existe el investigador" });
  }
};


exports.deleteProyectosDoctorado = (req, res) => {
  ProyectoDoctorado.destroy({
    where: {
      idinvestigador: req.body.id,
    },
  })
    .then(() => {
      res.send("ProyectoDoctorado eliminado");
    })
    .catch((e) => {
      console.log(e);
      res.send({ Error: e });
    });
};
