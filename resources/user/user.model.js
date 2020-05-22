import mongoose from 'mongoose'

const UserSchema = mongoose.Schema({
    'firstName': {
        type: String
    },
    'lastName' : {
        type : String
    },
    'address' : {
        type : String
    },
    'company' : {
        type: String
    }
})
// export const Users = mongoose.model('Users', UserSchema)
module.exports = mongoose.model("TestCollection",UserSchema)