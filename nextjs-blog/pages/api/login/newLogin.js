import createSalt from './components/createSalt'
import hashSalt from './components/hashSlat';
import checkNewUser from './components/checkNewUser/checkNewUser';
import post from './components/post';

const params = {
    db: {
        database: "login",
        collection: "users"
    },
    regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
};

export default async function HandleRequest(req, res){

    const ip = req.socket.remoteAddress || req.headers['x-forwarded-for'];
    const body = req.body;

    try{
        const check = await checkNewUser(body.login, body.password, ip, params.db, params.regex);

        if(check.error) return res.status(401).json(check);

        const newSalt = createSalt();
        const hashedPassword = hashSalt(body.password, newSalt);

        const record = await post({
            login: body.login, 
            password: hashedPassword,
            salt: newSalt,
            ip: ip
        }, params.db);

        return res.status(200).json({error: false});

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