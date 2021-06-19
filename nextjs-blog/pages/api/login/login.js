import connectMongo from '../dbConnect.js'

export default function HandleRequest(req, res){

    const body = req.body

    console.log(body)

    /*const query = async (client)=> {
        try{
        
            const db = client.db('blog');
        
            const col = db.collection("article");        
            const result = await col.insertOne(Object.assign({}, body, {date: new Date()}));
    
            return res.json({data: result})
    
        }catch(err){
            console.log(err)
        }
    }*/

    //return connectMongo(query)



}