const request = require('supertest');
const app = require('./server');

describe('Test my app', () => {

  test('should get all movies', async () => {
    const response = await request(app).get('/api/movies')

    expect(response.status).toBe(200);
    expect(response.ok).toBe(true);
    expect(Array.isArray(response.body.data.movies)).toBe(true);
  });


});





