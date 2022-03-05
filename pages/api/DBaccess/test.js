

export default function handler(req, res) {
    if(req.method === 'POST'){
        res.json("POST SON!!")
    }
    if(req.method === 'GET'){
        res.json("GET SON!!!")
    }
}