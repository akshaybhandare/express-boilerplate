
import {Movies} from './movie.model'

export const getMovies = async (req, res) => {
    try {
        let movieList = await Movies.find({})
        console.log(movieList)
        res.status(200).send(movieList);
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
}

// .find({title:"Two Old Sparks"})