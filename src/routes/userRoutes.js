const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// 🔹 Rota para criar um usuário
router.post("/", userController.registrarUsuario);

module.exports = router;
