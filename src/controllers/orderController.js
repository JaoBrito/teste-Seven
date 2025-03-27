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

// Função para listar todos os pedidos
const getAllOrders = async (req, res) => {
  try {
    const orders = await prisma.order.findMany(); // Busca todos os pedidos
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao listar pedidos', error });
  }
};

// Função para listar os pedidos do usuário
const getOrdersByUser = async (req, res) => {
  const { userId } = req.params; // Recebe o ID do usuário como parâmetro de rota

  try {
    const orders = await prisma.order.findMany({
      where: { userId },
    });

    if (orders.length === 0) {
      return res.status(404).json({ message: "Nenhum pedido encontrado para este usuário." });
    }

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
    // Verificar se o pedido existe antes de atualizar
    const existingOrder = await prisma.order.findUnique({
      where: { id },
    });

    if (!existingOrder) {
      return res.status(404).json({ message: 'Pedido não encontrado' });
    }

    // Atualizar o status do pedido
    const updatedOrder = await prisma.order.update({
      where: { id },
      data: { status },
    });

    return res.status(200).json(updatedOrder);
  } catch (error) {
    console.error('Erro ao atualizar status do pedido:', error);
    return res.status(500).json({ message: 'Erro ao atualizar status do pedido', error: error.message });
  }
};

module.exports = { createOrder, getAllOrders, getOrdersByUser, updateOrderStatus };
