export default function handler(req, res){

    const {ObjectID} = require("mongodb");

    const { pid } = req.query

    const connectMongo = require("dbConnect");

    const db_name= "dashboard"

    const query = async (client)=> {
        try{

            const db = client.db(db_name);

            const col = db.collection("people");

            const result = pid == "userNames" ? 
                await col.find({}).project({name: 1}).toArray() :
                await col.find({_id: new ObjectID(pid)}).toArray();

            res.json({data: result})

        }catch(err){
            console.log(err)
        }
    }

    connectMongo(query);

}