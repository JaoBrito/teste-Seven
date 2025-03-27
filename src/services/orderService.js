const prisma = require('../prismaClient');
async function createOrder(userId, products) {
  try {
    if (!userId || !Array.isArray(products) || products.length === 0) {
      throw new Error("Usuário ou produtos inválidos");
    }

    const formattedProducts = products.map(({ id, quantity }) => ({
      productId: id,
      quantity,
    }));

    // Calcula o total
    const total = products.reduce((acc, p) => acc + p.quantity * p.price, 0);

    const pedido = await prisma.order.create({
      data: {
        userId,
        products: formattedProducts,
        total,
      },
    });

    return pedido;
  } catch (error) {
    console.error("Erro ao criar pedido:", error);
    throw new Error("Erro ao criar pedido");
  }
}

module.exports = { createOrder };