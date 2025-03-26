// const express = require('express');
// const { createOrder, getOrders, updateOrderStatus } = require('../controllers/orderController');
// const router = express.Router();

// // Rotas de pedidos
// router.post('/', createOrder);          // Criar pedido
// router.get('/', getOrders);             // Listar pedidos
// router.put('/:id/status', updateOrderStatus); // Atualizar status do pedido

// module.exports = router;

const express = require('express');
const { criarPedido } = require('../services/orderService');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { userId, products } = req.body;

    if (!userId || !products || !Array.isArray(products)) {
      return res.status(400).json({ message: "Dados inválidos" });
    }

    const novoPedido = await criarPedido(userId, products);
    res.status(201).json(novoPedido);
  } catch (error) {
    res.status(500).json({ message: "Erro ao criar pedido", error });
  }
});

module.exports = router;
