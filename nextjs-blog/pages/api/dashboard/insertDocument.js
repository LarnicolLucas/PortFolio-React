export default function handler(req, res){

    /*const connectMongo = require("dbConnect");

    const db_name = "dashboard";

    const Usher = {
        "name": { "first": "Mario", "last": "Miyamoto" },
        "birth": new Date(1982, 1, 1),
        "experience": new Date(2010, 8, 1),
        "projects": 4,                                                                                                                                                                                                                                                     
        "technos": [ 
            {name: "VIM", value: 100}, 
            {name: "JAVA", value: 80},
            {name: "C", value: 90},
            {name: "PHP", value: 70},
            {name: "Visual Basic", value: 10}
        ],
        "job": "Software engineer",
        "histo": [
            [0,90], 
            [10, 80], 
            [20, 70], 
            [30, 60], 
            [40, 60], 
            [50, 60], 
            [60, 10], 
            [70, 10],
            [80, 20],
            [90, 10],
            [100, 30]
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
    */
}

