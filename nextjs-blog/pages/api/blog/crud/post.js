import connectMongo from '../../dbConnect.js'

const Post = async (req, res)=> {

    const body = req.body

    const bodyWidthDate = Object.assign({}, body, {date: new Date(Date.now()).toISOString()})

    const query = async (client)=> {
        try{
    
            const db = client.db('blog');
    
            const col = db.collection("article");
    
            const result = await col.insertOne(Object.assign({}, body, {date: new Date()}));
    
        return res.json({data: result})
    
        }catch(err){
            console.log(err)
        }
    }

    return connectMongo(query)

}

export default Post