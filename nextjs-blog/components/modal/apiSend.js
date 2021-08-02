export default async function ApiSend(message){

    try{

        const res = await fetch('/api/portfolio/message',
            {
                method: "POST",
                body: JSON.stringify(message),
                headers: { 'Content-Type': 'application/json' }
            }
        );

        const response = await res.json();

        return response

    }catch(err){
        console.log(err)
    }
}