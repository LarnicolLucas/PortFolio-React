import connectMongo from '../../dbConnect.js'

const Del = async (req, res)=> {

    const {ObjectID} = require("mongodb");
    const pid = new ObjectID(req.body);
    const _id = new ObjectID(pid);

    const query = async (client)=> {
        try{
    
            const db = client.db("blog");
            const col = db.collection("article");
    
            const result = await col.deleteOne({_id : _id});
    
        return res.json({data: result})
    
        }catch(err){
            console.log(err)
        }
    }

    return connectMongo(query)

}

export default Del