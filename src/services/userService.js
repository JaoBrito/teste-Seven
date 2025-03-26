const prisma = require("../prismaClient");
const bcrypt = require("bcryptjs"); // Para hash da senha

async function criarUsuario(name, email, password) {
  try {
    // 🔹 Verifica se o e-mail já está cadastrado
    const usuarioExistente = await prisma.user.findUnique({
      where: { email },
    });

    if (usuarioExistente) {
      throw new Error("E-mail já cadastrado");
    }

    // 🔹 Hash da senha antes de salvar
    const senhaCriptografada = await bcrypt.hash(password, 10);

    // 🔹 Cria o usuário
    const usuario = await prisma.user.create({
      data: {
        name,
        email,
        password: senhaCriptografada, // Salva a senha criptografada
      },
    });

    return usuario;
  } catch (error) {
    console.error("Erro ao criar usuário:", error);
    throw new Error("Erro ao criar usuário");
  }
}

module.exports = { criarUsuario };
