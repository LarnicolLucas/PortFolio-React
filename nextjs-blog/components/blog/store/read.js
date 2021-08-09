export default function Read(){
    return JSON.parse(sessionStorage.getItem("article"))
};