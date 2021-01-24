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

    if((key.contains("-----BEGIN PUBLIC KEY-----") && key.contains("-----END PUBLIC KEY-----")) || (key.contains("-----BEGIN PRIVATE KEY-----") && key.contains("-----END PRIVATE KEY-----"))) {
        // Keyfile must be text
        // Check meets required format
        return key.subarray(26, key.length-24);

        // Return the key as string
    }



    // Throw error if neither conditions met.
    throw new Error(chalk.redBright("Unable to load keyfile: ") + chalk.white(keyFile));
}
