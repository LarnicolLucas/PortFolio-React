import connectMongo from '../../dbConnect.js'

const Put = async (req, res)=> {

    const body = req.body

    const {ObjectID} = require("mongodb");
    const _id = new ObjectID(body._id);

    delete body._id

    const query = async (client)=> {
        try{
    
            const db = client.db('blog');
    
            const col = db.collection("article");
    
            const result = await col.replaceOne({ _id: _id }, body);
    
        return res.json({data: result})
    
        }catch(err){
            console.log(err)
        }
    }

    return connectMongo(query)

}

export default Put