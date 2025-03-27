const express = require("express");
const { createProduct, getProducts, updateProduct, deleteProduct } = require("../controllers/productController");
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Produtos
 *   description: Endpoints para gerenciar produtos
 */

/**
 * @swagger
 * /api/products:
 *   get:
 *     summary: Mostra todos os produtos
 *     description: Retorna uma lista de todos os produtos cadastrados.
 *     tags: [Produtos]
 *     responses:
 *       200:
 *         description: Lista de produtos retornada com sucesso
 *   post:
 *     summary: Cria um novo produto
 *     description: Adiciona um novo produto ao banco de dados.
 *     tags: [Produtos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - price
 *               - stock
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Teclado Mecânico"
 *               description:
 *                 type: string
 *                 example: "Teclado mecânico RGB com switches azuis"
 *               price:
 *                 type: number
 *                 example: 299.99
 *               stock:
 *                 type: integer
 *                 example: 50
 *     responses:
 *       201:
 *         description: Produto criado com sucesso
 *       400:
 *         description: Erro ao criar produto
 */

/**
 * @swagger
 * /api/products/{id}:
 *   put:
 *     summary: Atualiza um produto existente
 *     description: Modifica um produto no banco de dados pelo seu ID.
 *     tags: [Produtos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do produto a ser atualizado
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Mouse Gamer"
 *               description:
 *                  type: string
 *                  example: "mouse vermelho forte"
 *               price:
 *                 type: number
 *                 example: 149.99
 *               stock:
 *                 type: integer
 *                 example: 30
 *     responses:
 *       200:
 *         description: Produto atualizado com sucesso
 *       400:
 *         description: Erro ao atualizar produto
 *   delete:
 *     summary: Deleta um produto
 *     description: Remove um produto do banco de dados pelo seu ID.
 *     tags: [Produtos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do produto a ser deletado
 *     responses:
 *       200:
 *         description: Produto removido com sucesso
 *       404:
 *         description: Produto não encontrado
 */

router.post("/", createProduct);
router.get("/", getProducts);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
