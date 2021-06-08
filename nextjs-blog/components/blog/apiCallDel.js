export default async function ApiCallDel(id){
    
    try{
        const response = await fetch('/api/blog/crud/Del', {
            method: "DELETE",
            body: JSON.stringify(id),
            headers: { 'Content-Type': 'application/json' }
        });

        //const list = await response.json();

        return console.log("Deleted")

    }catch(err){
        console.log(err)
    }
}