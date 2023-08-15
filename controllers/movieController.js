const Movie = require('../models/Movie')

// Read Movies
exports.getAllMovies = async (req, res) => {

    try{
        const movies = await Movie.find()
        res.status(200).json({
            status: 'ok',
            data: { movies }
        })
    }catch(err){
        res.status(404).json({
            status: 'fail',
            message: `ERROR => ${err}`
        })
    }
}

// Create Movie
exports.createMovie = async (req, res) => {

    try{
        const newMovie = await Movie.create({
            movieName: req.body.movieName,
            movieRating: req.body.movieRating,
            releaseDate: req.body.releaseDate,
            directorName: req.body.directorName
        })
        res.status(201).json({
            status: 'Ok',
            data: { 
                movie: newMovie
            }
        })
    }catch(err){
        res.status(404).json({
            status: 'fail',
            message: `ERROR => ${err}`
        })
    }
}

// Delete Movie
exports.deleteMovie = async (req, res) => {

    try{
        await Movie.findByIdAndDelete(req.params.id)
        res.status(200).json({
            status: 'Ok',
            data: null
        })
    }catch(err){
        res.status(404).json({
            status: 'fail',
            message: `ERROR => ${err}`
        })
    }
}

// Update Movie
exports.updateMovie = async (req, res) => {

    try{
        const updatedMovie = await Movie.updateOne(
            { _id: req.params.id },
            {
                $set: {
                    movieName: req.body.movieName,
                    movieRating: req.body.movieRating,
                    releaseDate: req.body.releaseDate,
                    directorName: req.body.directorName
                }
            }
        )
        res.status(200).json({
            status: 'Ok',
            data: { 
                movie: updatedMovie
            }
        })
    }catch(err){
        res.status(404).json({
            status: 'fail',
            message: `ERROR => ${err}`
        })     
    }
}