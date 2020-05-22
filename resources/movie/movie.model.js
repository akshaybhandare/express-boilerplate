import mongoose from 'mongoose'

const Schema = mongoose.Schema

const movieSchema = new Schema({
    _id: {
        type : String
    },
    title : {
        type : String
    },
    year: {
        type : Number
    }
})

export const Movies = mongoose.model("Movies",movieSchema)