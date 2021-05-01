function validateLocation (location) {
  /**
   * a Location should have 2 properties:
   * - logitude
   * - latitude
   */
  if (typeof location !== 'object') return false;
  if (!location.hasOwnProperty('longitude') || !location.hasOwnProperty('latitude')) return false; 

  const longitude = location.longitude;
  const latitude = location.latitude;
  if (typeof longitude !== 'number' || typeof latitude !== 'number') return false;
  return true;

}


module.exports = validateLocation;