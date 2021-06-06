import connectMongo from '../../dbConnect.js'

const Get = async (req, res)=> {

    const {ObjectID} = require("mongodb");
    const { pid } = req.query;
    const _id = new ObjectID(pid);

    const query = async (client)=> {
        try{
    
            const db = client.db("blog");
    
            const col = db.collection("article");
    
            const result = await col.find({_id: _id}).toArray();
    
        return res.json({data: result})
    
        }catch(err){
            console.log(err)
        }
    }

    return connectMongo(query)

}

export default Get