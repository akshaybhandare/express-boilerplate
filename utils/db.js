import mongoose from 'mongoose'

export const connect = async (url = "mongodb://localhost:27017/UserDB") => {
    try {
        mongoose.set('useNewUrlParser', true);
        mongoose.set('useFindAndModify', false);
        mongoose.set('useCreateIndex', true);
        console.log('connected!')
        await mongoose.connect(url, {  useUnifiedTopology: true });
    } catch (err) {
        console.error(err)
        throw err;
    }
}

