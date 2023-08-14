const mongoose = require("mongoose")

const movieSchema = new mongoose.Schema({
    movieName:{
      type: String,
      required: [true, 'A movie must have a name'],
      unique: true
    },
    movieRating:{
      type: Number,
      required: [true, 'A movie must have a rating'],
      default: 6.5
    },
    releaseDate:{
      type: Date,
      required: [true, 'A movie must have a release date'],
    },
    directorName:{
      type: String,
      required: [true, 'A movie must have a director name'],
    }
  });
  
const movie = mongoose.model('Movie', movieSchema);
  
module.exports = movie;