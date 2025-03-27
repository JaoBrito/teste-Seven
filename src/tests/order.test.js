const request = require('supertest');
const app = require('../../src/server');

describe('Testes de API - Pedidos', () => {
  let server;

  beforeAll(() => {
    server = app.listen();
  });

  afterAll(() => {
    server.close();
  });

  it('Deve criar um pedido com sucesso', async () => {
    const response = await request(server)
      .post('/api/orders')
      .send({
        userId: '9b47eaac-d2f3-4eec-8370-f734329f5aaa',
        products: [
          {
            id: 'a1b2c3d4-e5f6-7890-ab12-cd34ef56gh78',
            quantity: 2,
            price: 1992.99,
          },
        ],
      });

    expect(response.status).toBe(201);
  });
});
