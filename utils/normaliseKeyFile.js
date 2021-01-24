let chalk = require('chalk');
const path = require("path");
const fs = require("fs");

module.exports = function(keyFile) {

    let key = keyFile;

    // Check if keyFile is a file path
    if(keyFile === path.basename(keyFile)) {
        console.log("Key is file")
        key = fs.readFileSync(keyFile);
    }

    key = keyFile.toString()


    // format public key
    if((key.indexOf("-----BEGIN PUBLIC KEY-----") > -1 && key.indexOf("-----END PUBLIC KEY-----")) > -1) {
        // Keyfile must be text
        // Check meets required format
        // Return the key as string
        return key.substr(26, key.length-50);

    }


    // format private key
    if (key.indexOf("-----BEGIN PRIVATE KEY-----") > -1 && key.indexOf("-----END PRIVATE KEY-----") > -1) {
        return key.substr(27, key.length-53);
    }


    // Throw error if neither conditions met.
    throw new Error(chalk.redBright("Unable to load keyfile: ") + chalk.white(keyFile));
}
