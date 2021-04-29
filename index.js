const authentication = require('./utils/authentication'),
  createDevKeyfile = require('./utils/createDevKeyfile'),
  database = require('./utils/database'),
  { malformed, internalError } = require('./utils/errorResponses'),
  hasPermissions = require('./utils/hasPermissions'),
  loadDevPublic = require('./utils/loadDevPublic'),
  normaliseKeyFile = require('./utils/normaliseKeyFile'),
  validateEmail = require('./utils/validateEmail'),
  validateLocation = require('./utils/validateLocation'),
  validateString = require('./utils/validateString')

  module.exports = {
    authentication,
    createDevKeyfile,
    database,
    malformed,
    internalError,
    hasPermissions,
    loadDevPublic,
    normaliseKeyFile,
    validateEmail,
    validateLocation,
    validateString
  }  //  export the imported utils