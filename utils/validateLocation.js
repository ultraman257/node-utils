function validateLocation (obj) {

  if (typeof obj !== 'object') return false;
  
  if (!obj.hasOwnProperty('longitude')) return false;
  if (!obj.hasOwnProperty('latitude')) return false;

  const longitude = obj.longitude;
  const latitude = obj.latitude;
  
  if (typeof longitude !== 'number') return false;
  if (typeof latitude !== 'number') return false;

  return true;

}


module.exports = validateLocation;