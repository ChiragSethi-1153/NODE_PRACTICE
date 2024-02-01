
const Users = require('../Models/Users')

exports.createData = async(payload)=>{
    const {name, email, age, gender, location} = payload;
    try {
        const user =  new Users({name, email, age, gender, location});
        await user.save();
        return user;
    } catch (err) {
        console.error(err);
        
    }
}

exports.findData = async () => {
        const users = await Users.find({})
        return users;
}

exports.changeData = async (request) => {
    const {id} = request.params;
    const { name, email, age } = request.body;
    const users = await Users.findByIdAndUpdate(id, { name, email, age }, { new: true })
    return users;
}

exports.deleteData = async (request) => {
    const {id} = request.params;
    const users = await Users.findByIdAndDelete(id)
    return users;
}