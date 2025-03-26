const userService = require("../services/userService");

async function registrarUsuario(req, res) {
  try {
    const { name, email, password } = req.body;

    // Validação simples
    if (!name || !email || !password) {
      return res.status(400).json({ message: "Todos os campos são obrigatórios" });
    }

    const novoUsuario = await userService.criarUsuario(name, email, password);
    return res.status(201).json(novoUsuario);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
}

module.exports = { registrarUsuario };
