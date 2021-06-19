import createSalt from './components/createSalt'
import hashSalt from './components/hashSlat';
import checkNewUser from './components/checkNewUser/checkNewUser';

const params = {
    db: {
        database: "login",
        collection: "users"
    },
    regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
};

export default async function HandleRequest(req, res){

    const body = req.body;

    try{
        const check = await checkNewUser(body.login, body.password, 123, params.db, params.regex);

        if(check.error) return res.status(401).json({ error: check.message });

        const newSalt = createSalt();

        //hashSalt(body.password, newSalt)

    }catch(err){
        console.log(err)
    }

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