export default function handler(req, res){

    const { pid } = req.query

    //const target = pid == "userNames" ? {name : "?"} : {}

    const connectMongo = require("dbConnect");

    const db_name= "dashboard"

    const query = async (client)=> {
        try{

            const db = client.db(db_name);

            const col = db.collection("people");

            const cursor = await col.find({}).project({name: 1, _id: 0}).toArray();

            res.json({data: cursor})

        }catch(err){
            console.log(err)
        }
    }

    connectMongo(query);

}