const {  findData, createData, changeData, deleteData } = require("../services/user.service")

exports.addData =  async(req, res) => { 
    try{    
        
    const response = await createData(req.body);
        return res.status(201).json(response)
    }
    catch(error){
        console.error(error);
        res.status(500).send(error);
    }

    }


exports.getData =  async(req, res) => { 
    try{
        const response = await findData(req);
        return res.status(200).json(response)
    }
    catch (error) {
        console.error(error);
        res.status(500).send(error);
      } 
}

exports.updateData =async(req,res) => {
        
    try{
        const response = await changeData(req);  
        return res.status(201).json(response)
    }
        catch (error) {
            console.error(error);
            res.status(500).send(error);
          }
}

exports.removeData = async(req,res) => {
    try{
        const response = await deleteData(req);
        return res.status(201).json(response)
    }
    catch (error) {
        console.error(error);
        res.status(500).send(error);
      }

}