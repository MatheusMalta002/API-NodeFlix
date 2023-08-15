const request = require('supertest');
const app = require('./server');

describe('Test my app', () => {

  //GET
  test('should get all movies', async () => {
    const response = await request(app).get('/api/movies')

    expect(response.status).toBe(200);
    expect(response.ok).toBe(true);
    expect(Array.isArray(response.body.data.movies)).toBe(true);
  });

  //POST
  test('should create a new movie', async () => {
    const newMovie = {
      movieName: 'Test Movie 2',
      movieRating: 8.5,
      releaseDate: '2023-01-01', 
      directorName: 'Test Director',
    };

    const res = await request(app).post('/api/movies').send(newMovie);

    expect(res.status).toBe(201);
    expect(res.body.status).toBe('Ok');
  }); 

  //PACTH

  //DELETE

});





