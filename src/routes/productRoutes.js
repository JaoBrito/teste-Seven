const express = require('express');
const { createProduct, getProducts, updateProduct, deleteProduct } = require('../controllers/productController');
const router = express.Router();

// Rotas de produtos
router.post('/', createProduct);  // Criar produto
router.get('/', getProducts);     // Listar produtos
router.put('/:id', updateProduct); // Atualizar produto
router.delete('/:id', deleteProduct); // Remover produto

module.exports = router;
