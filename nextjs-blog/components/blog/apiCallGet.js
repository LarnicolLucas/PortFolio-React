export default async function ApiCallGet(_id){
    
    try{
        const response = await fetch('/api/blog/crud/'+_id, {
            method: "GET"
        });

        const list = await response.json();

        return list.data.map((el, i)=> Object.assign({}, el, {key: i}));

    }catch(err){
        console.log(err)
    }
}