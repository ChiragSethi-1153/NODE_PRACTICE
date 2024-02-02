
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
        let page = Number(request.query.page);
        let limit = Number(request.query.limit) || 5;
        let count = await Users.estimatedDocumentCount({});
        const pageCount = count / limit
        const users = await Users.find({})
        .skip(limit * (page-1))
        .limit(limit)
    

        return {
            pagination: {
                count,
                pageCount
            },
            users};
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
