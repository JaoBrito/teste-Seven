const prisma = require('../prismaClient');

async function criarPedido(userId, products) {
  try {
    // 🔹 Verifica se o usuário existe
    const usuario = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!usuario) {
      throw new Error("Usuário não encontrado");
    }

    // 🔹 Calcula o total do pedido
    const total = products.reduce((acc, p) => acc + p.quantity * p.price, 0);

    // 🔹 Cria o pedido
    const pedido = await prisma.order.create({
      data: {
        userId, // O ID do usuário já foi validado
        products,
        total,
        status: "Pendente",
      },
    });

    return pedido;
  } catch (error) {
    console.error("Erro ao criar pedido:", error);
    throw new Error("Erro ao criar pedido");
  }
}


module.exports = { criarPedido };
