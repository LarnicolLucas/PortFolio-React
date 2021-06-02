export default async function ApiCall(src){
    try{
        const response = await fetch(src, {
            method: 'GET',
            //body: JSON.stringify("test"),
            //headers: { 'Content-Type': 'application/json' }
        });
        const list = await response.json();
        return list
    }catch(err){
        console.log(err)
    }
}