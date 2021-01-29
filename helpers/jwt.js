const jwt = require('jsonwebtoken');

const generateJWT = ( uid ) => {
    return new Promise( (resolve, reject) => {
        const payload = {
            uid
        };
    
        jwt.sign( payload, process.env.JWT_KEY, {
            expiresIn: '24h'
        }, ( err, token ) => {
            if( err ){
                //Token could not be generated
                reject('Token could not be generated');
            } else {
                // TOKEN!
                resolve( token );
            }
        });
    });
}

module.exports = {
    generateJWT
}