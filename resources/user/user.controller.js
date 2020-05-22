import user from './user.model'

export const getUser = async (req, res) => {
    try {
        var test = await user.find().limit(5)
        res.status(200).json(test)
    } catch (err) {
        res.status(500).send(err);
    }
}

export const postUser = async (req,res) => {
    try{
        const a = new user({
            firstName:'Test1',
            lastName:'Tdest2',
            address:"5554444",
            company:"test11"
        })
        const t = await a.save()
        .then(data => res.json(data)).catch(err => console.log(err))
    }
    catch(err){
        console.log(err)
    }
}
