const express = require('express');
const { register, login } = require('../controllers/authController'); // Caminho para seu controller
const router = express.Router(); // Cria uma instância do roteador Express

// Definindo as rotas
router.post('/register', register);
router.post('/login', login);

// Exportando o roteador para que possa ser usado em outros arquivos
module.exports = router;
