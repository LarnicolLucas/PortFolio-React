import Del from './del.js';
import Get from './get.js'
import Post from './post.js'
import Put from './put.js'

export default function HandleRequest(req, res){

    if(req.method === "GET") return Get(req, res);
    if(req.method === "POST") return Post(req, res);
    if(req.method === "DELETE") return Del(req, res);
    if(req.method === "PUT") return Put(req, res);

}