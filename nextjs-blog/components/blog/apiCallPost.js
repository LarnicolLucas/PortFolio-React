export default async function ApiCall(param){
    
    try{
        const response = await fetch('/api/blog/crud/0', {
            method: "POST",
            body: JSON.stringify(param),
            headers: { 'Content-Type': 'application/json' }
        });

        //const list = await response.json();

        return console.log("posted")

    }catch(err){
        console.log(err)
    }
}