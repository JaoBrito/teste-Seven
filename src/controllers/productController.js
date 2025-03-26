const prisma = require('../prismaClient'); // Para usar o Prisma Client

// Função para criar produto
const createProduct = async (req, res) => {
  try {
    const { name, description, price, stock } = req.body;
    const product = await prisma.product.create({
      data: {
        name,
        description,
        price,
        stock,
      },
    });
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar produto', error });
  }
};

// Função para listar produtos
const getProducts = async (req, res) => {
  try {
    const products = await prisma.product.findMany();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao listar produtos', error });
  }
};

// Função para atualizar produto
const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, description, price, stock } = req.body;

  try {
    const updatedProduct = await prisma.product.update({
      where: { id },
      data: { name, description, price, stock },
    });
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar produto', error });
  }
};

// Função para remover produto
const deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.product.delete({
      where: { id },
    });
    res.status(200).json({ message: 'Produto removido com sucesso' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao remover produto', error });
  }
};

module.exports = { createProduct, getProducts, updateProduct, deleteProduct };
