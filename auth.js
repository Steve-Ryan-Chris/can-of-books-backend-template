const jwt = require('jsonwebtoken');
const jwksClient = require('jwks-rsa');

const client = jwksClient({
    jwksUri: process.env.JWKS_URI
});

function getKey(header, callback) {
    client.getSigningKey(header.kid, function (err, key) {
        const signingKey = key.publicKey || key.rsaPublicKey;
        callback(null, signingKey);
    });
}

function VerifyUser(req, errOrUserCallback) {

    try {
        const token = req.headers.authorization.split('')[1];
        jwt.verify(token, getKey, {}, errOrUserCallback);
    } catch (err) {
        errOrUserCallback('Not Authorized');
    }
}

module.exports = VerifyUser