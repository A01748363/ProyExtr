const express = require("express");
const router = express.Router();
const {
  getInvestigadores,
  createInvestigadores,
  storeInvestigadores,
  updateInvestigadores,
  deleteInvestigadores,
} = require("../controllers/investigadores");

// Crear investigador
router.post("/createInvestigadores", createInvestigadores);

// Consultar investigadores
router.get("/investigadores", getInvestigadores);

// Guardar investigador
router.post("/storeInvestigadores", storeInvestigadores);

// Actualizar investigador
router.post("/updateInvestigadores", updateInvestigadores);

// Borrar investigador
router.post("/deleteInvestigadores", deleteInvestigadores);

module.exports = router;
