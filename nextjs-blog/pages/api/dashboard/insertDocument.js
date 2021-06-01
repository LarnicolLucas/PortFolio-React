export default function handler(req, res){

    const connectMongo = require("dbConnect");

    const db_name = "dashboard";

    const Usher = {
        "name": { "first": "Usher", "last": "Raymond IV" },
        "birth": new Date(1978, 10, 14),
        "experience": new Date(2020, 6, 1),
        "projects": 2,                                                                                                                                                                                                                                                     
        "technos": [ 
            {name: "PHP", value: 90}, 
            {name: "Python", value: 40},
            {name: "C#", value: 63},
            {name: "C++", value: 20}
        ],
        "job": "Backend DEV",
        "histo": [
            [0,90], 
            [10, 20], 
            [20, 50], 
            [30, 40], 
            [40, 10], 
            [50, 100], 
            [60, 30], 
            [70, 30],
            [80, 70],
            [90, 20],
            [100, 70]
        ]
    }

    const query = async (client) => {
        try {

            const db = client.db(db_name);

            const col = db.collection("people");

            const p = await col.insertOne(Usher);

            const myDoc = await col.findOne();

            console.log(myDoc);

        }catch(err){
            console.log(err)
        }
    }

    connectMongo(query);
}

