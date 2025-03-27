const prisma = require('../prismaClient');


// async function createOrder(userId, products) {
//   try {
//       if (!userId || !Array.isArray(products) || products.length === 0) {
//           throw new Error("Usuário ou produtos inválidos");
//       }

//       // Calcula o total
//       const total = products.reduce((acc, p) => acc + p.quantity * p.price, 0);

//       const pedido = await prisma.order.create({
//           data: {
//               userId,
//               products,  // Não é necessário JSON.stringify, o Prisma salva automaticamente como JSON
//               total,
//           },
//       });

//       return pedido;
//   } catch (error) {
//       console.error("Erro ao criar pedido:", error);
//       throw new Error("Erro ao criar pedido");
//   }
// }

// module.exports = { createOrder };

async function createOrder(userId, products) {
  try {
      if (!userId || !Array.isArray(products) || products.length === 0) {
          throw new Error("Usuário ou produtos inválidos");
      }

      // Calcula o total
      const total = products.reduce((acc, p) => acc + p.quantity * p.price, 0);

      // Formatar apenas os campos necessários
      const formattedProducts = products.map(p => ({
          productId: p.id, 
          quantity: p.quantity
      }));

      // Criar o pedido no banco de dados
      const pedido = await prisma.order.create({
          data: {
              userId,
              products: formattedProducts,  // Agora será salvo como JSON corretamente
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