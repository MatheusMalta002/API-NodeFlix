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