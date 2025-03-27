const express = require('express');
const swaggerDocs = require('./config/swaggerConfig');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes');
const userRoutes = require('./routes/userRoutes');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Rotas
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);

swaggerDocs(app);

// Se o script for chamado diretamente, inicia o servidor
if (require.main === module) {
  app.listen(3000, () => {
    console.log('Server rodando na porta 3000 🔥🔥🔥');
  });
}

// Exporta `app` para uso nos testes
module.exports = app;
