function validateString (string) {

  if (typeof string !== 'string') return false;
  if (string.length < 1) return false;

  return true;

}

module.exports = validateString;