function validateString (string) {
  if (typeof string !== 'string' || string.length < 1) return false;
  return true;
}

module.exports = validateString;