const path = require("path");
const Investigador = require("../utils/database").models.Investigador;


exports.getInvestigadores = (__req, res) => {
  Investigador.findAll()
    .then((investigadores) => {
      console.log("Investigadores", investigadores);
      res.send(investigadores);
    })
    .catch((e) => {
      console.log(e);
      res.send({ Error: e });
    });
};


exports.createInvestigadores = (req,res)=>{
  console.log(req.body)
  Investigador.create(req.body)
      .then(ca=>{
          console.log("Registro Existoso")
          res.json({estado: "Exitoso"})
      })
      .catch(err=>{
          console.log(err)
          res.json({estado: "error"})
      })
}


exports.storeInvestigadores = (req, res) => {
  console.log(req.body);
  Investigador.create(req.body)
    .then((__res) => {
      res.send("Registro exitoso");
    })
    .catch((error) => {
      res.send({ error: error });
    });
};


exports.updateInvestigadores = async (req, res) => {
  const investigadorAActualizar = await Investigador.findOne({
    where: {
      idinvestigador: req.body.idinvestigador,
    },
  });

  if (investigadorAActualizar) {
    Investigador.update(req.body, {
      where: {
        idinvestigador: req.body.idinvestigador,
      },
    })
      .then(() => {
        console.log("Investigador actualizado");
        res.send("Investigador actualizado");
      })
      .catch((e) => {
        console.log(e);
        res.send({ Error: e });
      });
  } else {
    res.send({ Error: "No existe el investigador" });
  }
};

/**
 * Eliminar investigador.
 * @returns {Promise<*>}
 */
exports.deleteInvestigadores = (req, res) => {
  Investigador.destroy({
    where: {
      idinvestigador: req.body.id,
    },
  })
    .then(() => {
      res.send("Investigador eliminado");
    })
    .catch((e) => {
      console.log(e);
      res.send({ Error: e });
    });
};
