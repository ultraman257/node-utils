let chalk = require('chalk');
const path = require("path");
const fs = require("fs");

module.exports = function(keyFile) {

    let key = keyFile;

    // Check if keyFile is a file path
    if(key.split(".").length > 1 && key.split("/").length > 1) {
        console.log("Key is file")
        key = Buffer(fs.readFileSync(keyFile)).toString().trim();
    }

    // format public key
    if(key.split("PUBLIC").length > 1) {
        return key

    }


    // format private key
    if (key.split("PRIVATE").length > 1) {
        return key
    }


    // Throw error if neither conditions met.
    throw new Error(chalk.redBright("Unable to load keyfile: ") + chalk.white(keyFile));
}
