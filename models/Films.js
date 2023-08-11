const mongoose = require("mongoose")

const filmSchema = new mongoose.Schema({
    title: String,
    description: String,
    genre: String,
    releaseDate: Date,
    duration: Number,
    language: String,
    ratings: Number,
  });
  
const Film = mongoose.model('Film', filmSchema);
  
module.exports = Film;