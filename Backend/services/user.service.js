
const Users = require('../Models/Users')
require('mongoose-paginate')
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

exports.findData = async (request) => {
        console.log(request.query)
        const users = await Users.find({})
        let page = Number(request.query.page) || 1;
        let limit = Number(request.query.limit) || 1;
        let startIndex = (page-1)*limit;
        let endIndex = page * limit

        if{endIndex < users.length}{const results = {}
        results.next ={
            page: page+1,
            limit: limit
        }}
        const previous = {}
        previous.next ={
            page: page+1,
            limit: limit
        }
        results.results = users.slice(startIndex, endIndex);
        return results;
}

exports.changeData = async (request) => {
    const {id} = request.params;
    const { name, email, age, gender, location } = request.body;
    const users = await Users.findByIdAndUpdate(id, { name, email, age, gender, location }, { new: true })
    return users;
}

exports.deleteData = async (request) => {
    const {id} = request.params;
    const users = await Users.findByIdAndDelete(id)
    return users;
}
