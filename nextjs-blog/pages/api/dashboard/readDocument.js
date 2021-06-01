export default function handler(req, res){

    const connectMongo = require("dbConnect");

    const db_name= "dashboard"

    const query = async (client)=> {
        try{

            const db = client.db(db_name);

            const col = db.collection("people");

            const myDoc = await col.find({});

            res.json(myDoc)

            //await myDoc.forEach(el => console.log(el))

        }catch(err){
            console.log(err)
        }
    }

    connectMongo(query);

}