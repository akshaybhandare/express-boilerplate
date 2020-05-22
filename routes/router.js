import { Router } from 'express'
import {movieRouter} from '../resources/movie/movie.router'
import {userRouter} from '../resources/user/user.router'


export const router = Router()
router.use('/movie',movieRouter)
router.use('/user',userRouter)
