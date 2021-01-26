

const jwt = require("jsonwebtoken");
const {malformed} = require("./errorResponses");

module.exports = function(req, res, next) {

    console.log(req.headers);

    if(req.header("Authorization") === undefined) return malformed(res);
    if(req.header("Authorization").split(" ").length !== 2) return malformed(res);
    if(req.header("Authorization").split(" ")[0] !== "Bearer") return malformed(res);

    console.log(req.header("Authorization").split(" ")[1]);

    console.log(global.publicKey)

    let token = jwt.verify(req.header("Authorization").split(" ")[1], global.publicKey, { algorithms: ["RS256"]});

    if(!token.hasOwnProperty('permissions')) return malformed(res);
    if(!token.hasOwnProperty('userId')) return malformed(res);

    req.user = {
        id: token.id,
        permissions: token.permissions
    }

    next();


}
