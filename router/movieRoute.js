const express = require('express')
const movieController = require('./../controllers/movieController')

const router = express.Router()

router.route('/').get(movieController.getAllMovies)
router.route('/').post(movieController.createMovie)
router.route('/:id').delete(movieController.deleteMovie)
router.route('/:id').patch(movieController.updateMovie)

module.exports = router