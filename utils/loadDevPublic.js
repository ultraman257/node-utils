const normaliseKeyFile = require('./normaliseKeyFile')

module.exports = function () {

    global.publicKey = normaliseKeyFile('-----BEGIN PUBLIC KEY-----\n' +
        'MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAtccFMaszRy+WoYWHi4pS\n' +
        'ZwAtIL7a/vLCwO/muuCcg2cNQH6BspwlmVrZ5Inh79Ud8CzgY89qdpHT6/qNNfV0\n' +
        'G77Fz3bFT0Af4ppysJAr+z82qmZCN5G+PwTGyrZfFLDaruSSxblB5ugZ7B+0FLuP\n' +
        'YAAC7eMI0ZNnI7qDWYCHliZNX2wVVNECNFvP5osRDROIPZQO32E0Q/ZG6+pHsewf\n' +
        'NSaGWYv3GZZ+6bp/ha0ubKIWIrjX6FvjzQHujDrZ0lHXASC89oPX8pNwCBhRRKrx\n' +
        'HPWVGDa8k2p7a51W8fhi4YhDW/Fu/h0s9Ufj1z2XqWGRZauHu2YuEACWFZ9ELfxX\n' +
        '7K5hXZz35/kDZHx7bhX+5BuU8HDiVWlcWsYHBN2qzctGCB6JwzmHevmFbwCzgqBu\n' +
        'MXBXXm+wWYY0wqnbI7dtRlnQZneZwwmLP9k71zvqBPNO+RE0IqwQGA8diR/zuMkI\n' +
        'h4HMF5cN4CxKTYldhPuOMLHtqKKybLEB2+CbsnjGPACCI5ILHw5b2QWO4aDX1kNa\n' +
        'eh+VDF1s9IEsD0MPkSE+fo8/DhBR1wXCMrX4ioqYYsJ1LBV8IQVtFW14os/I+yWs\n' +
        'BOIzlOY4WQnApT75pSsGyQVpcw/e+ha0YEce0KhaXA1+AtFohnsne1k1OLxJkyLY\n' +
        '25Q9foBfxKQwukWQl4OsCwUCAwEAAQ==\n' +
        '-----END PUBLIC KEY-----')

}
