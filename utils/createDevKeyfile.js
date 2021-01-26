const chalk = require("chalk");
const { generateKeyPair } = require('crypto');

const { normaliseKeyFile } = require('./normaliseKeyFile');

module.exports = function() {
    generateKeyPair('rsa', {
        modulusLength: 4096,
        publicKeyEncoding: {
            type: "spki",
            format: "pem"
        },
        privateKeyEncoding: {
            type: "pkcs8",
            format: "pem"
        }
    }, (error, publicKey, privateKey) => {
        console.log(chalk.greenBright("[Keys]: " + chalk.white("Creating development keys")));
        console.log(chalk.bgRed(chalk.whiteBright("[Warning]")) + chalk.white(" These keys re-generate on each run and should not be used in production."));
        // global.publicKey = publicKey.trim();
        // global.privateKey = privateKey.trim();
        global.publicKey = normaliseKeyFile(publicKey.trim().toString());
        global.privateKey = normaliseKeyFile(privateKey.trim());
    })
}
