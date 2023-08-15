const mongoose = require('mongoose');
require('dotenv').config()

const DB_NAME = process.env.DB_NAME
const DB_PASSWORD = process.env.DB_PASSWORD

const testDBUrl = `mongodb+srv://${DB_NAME}:${DB_PASSWORD}@cluster0.ksurkpy.mongodb.net/?retryWrites=true&w=majority`

// conectando ao banco de dados
beforeAll(async () => {
  try {
    await mongoose.connect(testDBUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    console.error('Error connecting to the test database:', error);
  }
});

// Teste de conexão com o banco de dados
describe('Database Connection', () => {
  test('should be connected to the database', () => {
    expect(mongoose.connection.readyState).toBe(1); // 1 indica conexão bem-sucedida
  });
});

// desconecte-se do banco de dados 
afterAll(async () => {
  await mongoose.disconnect();
});




