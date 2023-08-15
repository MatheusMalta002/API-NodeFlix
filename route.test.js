const axios = require('axios');
const app = require('./index');

let server;
let serverPort;

describe('Test my app', () => {

  beforeAll(done => {
    server = app.listen(0, () => {
      serverPort = 3000;
      done();
    }); // Inicia o servidor
  });

  afterAll(done => {
    server.close(() => {
      done();
    }); // Fecha o servidor após todos os testes
  });

  it('should get all movies', async () => {
    const response = await axios.get(`http://localhost:${serverPort}/api/movies`);

    expect(response.status).toBe(200);
    expect(response.data.status).toBe('Ok');
    console.log(response.data.data.movies);
  });
});


