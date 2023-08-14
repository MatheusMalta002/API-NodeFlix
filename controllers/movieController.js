const Movie = require('../models/Movie')

exports.getAllMovies = async (req, res) => {

    try{
        const movies = await Movie.find()
        res.status(200).json({
            status: 'Ok',
            data: { movies }
        })
    }catch(err){
        res.status(404).json({
            status: 'fail',
            message: `ERROR => ${err}`
        })
    }
}

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

exports.deleteMovie = async (req, res) => {

    try{
        await Movie.findByIdAndDelete(req.params.id)
        res.status(204).json({
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