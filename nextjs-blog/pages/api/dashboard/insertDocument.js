export default function handler(req, res){

    const connectMongo = require("dbConnect");

    const db_name = "dashboard";

    const Lucas = {
        "name": { "first": "Lucas", "last": "Larnicol" },
        "birth": new Date(1987, 9, 18),
        "experience": new Date(2017, 6, 1),
        "projects": 6,                                                                                                                                                                                                                                                     
        "technos": [ 
            {name: "React", value: 90}, 
            {name: "Vue", value: 80},
            {name: "CSS", value: 75},
            {name: "NextJS", value: 60},
            {name: "Node", value: 75},
            {name: "SQLServer", value: 65},
            {name: "MongoDB", value: 40}
        ],
        "job": "Web Devellopement",
        "histo": [
            [0,100], 
            [10, 50], 
            [20, 50], 
            [30, 50], 
            [40, 50], 
            [50, 100], 
            [60, 50], 
            [70, 40],
            [80, 50],
            [90, 50],
            [100, 20]
        ]
    }

    const query = async (client) => {
        try {

            const db = client.db(db_name);

            const col = db.collection("people");

            const p = await col.insertOne(Lucas);

            const myDoc = await col.findOne();

            console.log(myDoc);

        }catch(err){
            console.log(err)
        }
    }

    connectMongo(query);
}

