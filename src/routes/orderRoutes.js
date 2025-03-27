const express = require('express');
const { createOrder, updateOrderStatus, getAllOrders, getOrdersByUser } = require('../controllers/orderController');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Pedidos
 *   description: Endpoints para gerenciar pedidos
 */

/**
 * @swagger
 * /api/orders:
 *   post:
 *     summary: Cria um novo pedido
 *     description: Cria um pedido para um usuário com uma lista de produtos.
 *     tags: [Pedidos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - userId
 *               - products
 *             properties:
 *               userId:
 *                 type: string
 *                 example: "9b47eaac-d2f3-4eec-8370-f734329f5aaa"
 *               products:
 *                 type: array
 *                 items:
 *                   type: object
 *                   required:
 *                     - id
 *                     - quantity
 *                     - price
 *                   properties:
 *                     id:
 *                       type: string
 *                       example: "a1b2c3d4-e5f6-7890-ab12-cd34ef56gh78"
 *                     quantity:
 *                       type: integer
 *                       example: 2
 *                     price:
 *                       type: number
 *                       format: float
 *                       example: 1992.99
 *     responses:
 *       201:
 *         description: Pedido criado com sucesso
 *       400:
 *         description: Erro ao criar pedido
 */


/**
 * @swagger
 * /api/orders:
 *   get:
 *     summary: Retorna todos os pedidos
 *     description: Retorna uma lista de todos os pedidos registrados.
 *     tags: [Pedidos]
 *     responses:
 *       200:
 *         description: Lista de pedidos retornada com sucesso
 *       400:
 *         description: Erro ao buscar pedidos
 */

/**
 * @swagger
 * /api/orders/user/{userId}:
 *   get:
 *     summary: Obtém todos os pedidos de um usuário específico
 *     tags: [Pedidos]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         description: ID do usuário cujos pedidos devem ser retornados
 *         schema:
 *           type: string
 *           example: "593c62b7-b23f-42f3-9b73-71e1305c7fa6"
 *     responses:
 *       200:
 *         description: Lista de pedidos do usuário retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     example: "7a4b2dce-da37-4166-b4db-d00fa84bd253"
 *                   userId:
 *                     type: string
 *                     example: "593c62b7-b23f-42f3-9b73-71e1305c7fa6"
 *                   products:
 *                     type: array
 *                     items:
 *                       type: object
 *                       properties:
 *                         productId:
 *                           type: string
 *                           example: "a1b2c3d4-e5f6-7890-ab12-cd34ef56gh78"
 *                         quantity:
 *                           type: integer
 *                           example: 2
 *                   total:
 *                     type: number
 *                     example: 199.99
 *                   status:
 *                     type: string
 *                     example: "Pendente"
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *                     example: "2025-03-27T00:25:12.954Z"
 *       404:
 *         description: Nenhum pedido encontrado para o usuário
 *       500:
 *         description: Erro interno ao buscar os pedidos
 */


/**
 * @swagger
 * /api/orders/{id}/status:
 *   put:
 *     summary: Atualiza o status de um pedido
 *     description: Status ("Pendente", "Processando", "Enviado", "Entregue") 
 *     tags: [Pedidos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do pedido que terá o status atualizado
 *         schema:
 *           type: string
 *           example: "d45c6e70-23ab-40b5-b6bc-56e6f5e2a8c7"
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                 type: string
 *                 example: "Concluído"
 *     responses:
 *       200:
 *         description: Status do pedido atualizado com sucesso
 *       400:
 *         description: Erro ao atualizar status do pedido
 *       404:
 *         description: Pedido não encontrado
 */


router.post('/', createOrder); // Criar pedido
router.get('/', getAllOrders);    // Listar pedidos
router.get('/user/:userId', getOrdersByUser) //Lista todos os pedidos do user especifico
router.put('/:id/status', updateOrderStatus); // Atualizar status do pedido

module.exports = router;
