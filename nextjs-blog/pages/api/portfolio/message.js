import connectMongo from '../dbConnect.js'

const Post = async (req, res)=> {

    const body = req.body;
    const ip = req.socket.remoteAddress || req.headers['x-forwarded-for'];

    const query = async (client)=> {
        try{
    
            const db = client.db('portfolio');
    
            const col = db.collection("message");
    
            const result = await col.insertOne(Object.assign({}, body, {date: new Date(), ip: ip}));
    
        return res.json({data: result})
    
        }catch(err){
            console.log(err)
        }
    }

    return connectMongo(query)

}

export default Post