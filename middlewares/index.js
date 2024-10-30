const fs = require('fs');

function logReqRes(fileName){
    return (req, res, next) => {
        const now = new Date();
        const formatedDate = now.toLocaleString();
    
        fs.appendFile(
            fileName,
            `Date&Time -> ${formatedDate} : Request Method -> ${req.method} : Request Path -> ${req.path}\n`,
        (err, data) => {
            next();
        });
    }
}


function Authorization() {
    return (req, res, next) => {
        const authHeader = req.header("authorization");
    
        if(authHeader && authHeader === "Bearer my-secret-token" || req.method === 'GET') {
            next();
        }
        else {
            res.status(401).json({ error: 'Unauthorized: Invalid or missing token' });
        }
    }

}
module.exports = {
    logReqRes,
    Authorization,
}