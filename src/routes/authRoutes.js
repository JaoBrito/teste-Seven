const express = require('express');
const { register, login } = require('../controllers/authController');
const router = express.Router();

// Definindo as rotas
router.post('/register', register);
router.post('/login', login);

module.exports = router;
