import { Router } from 'express'
import { getMovies } from '../movie/movie.controller'

export const movieRouter = Router()

movieRouter
.route('/')
.get(getMovies)