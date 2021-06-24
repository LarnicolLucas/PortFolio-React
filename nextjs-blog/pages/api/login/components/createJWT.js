const jwt = require('jsonwebtoken');
const fs = require('fs')

export default function createNewToken(data, expirDay){

    const privateKey = fs.readFileSync('./pages/api/login/components/privateKey.key');

    return jwt.sign(data, privateKey, { 
        algorithm: 'RS256',
        expiresIn: `${expirDay} days`
    });
}