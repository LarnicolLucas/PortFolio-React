export default async function ApiCallPost(login, password, type){

    const data = {
        login: login,
        password: password,
    };

    const route = type ? "newLogin" : "login"

    try{
        const response = await fetch('/api/login/'+route, {
            method: "POST",
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' }
        });

        const responseData = await response.json();

        return responseData

    }catch(err){
        console.log(err)
    }
}