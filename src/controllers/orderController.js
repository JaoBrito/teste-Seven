const prisma = require('../prismaClient');

// Função para criar um pedido
const createOrder = async (req, res) => {
  const { userId, products } = req.body;

  try {
    // Calcular o total do pedido com base nos produtos
    const orderTotal = products.reduce((total, product) => total + (product.price * product.quantity), 0);

    const order = await prisma.order.create({
      data: {
        userId,
        products: {
          create: products.map(product => ({
            productId: product.id,
            quantity: product.quantity,
          })),
        },
        total: orderTotal,
        status: 'Pendente', // Status inicial
      },
    });

    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar pedido', error });
  }
};

// Função para listar os pedidos do usuário
const getOrders = async (req, res) => {
  const { userId } = req.query; // Recebe o ID do usuário para filtrar os pedidos

  try {
    const orders = await prisma.order.findMany({
      where: { userId },
    });
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao listar pedidos', error });
  }
};

// Função para atualizar o status do pedido
const updateOrderStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  try {
    const updatedOrder = await prisma.order.update({
      where: { id },
      data: { status },
    });
    res.status(200).json(updatedOrder);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar status do pedido', error });
  }
};

module.exports = { createOrder, getOrders, updateOrderStatus };
