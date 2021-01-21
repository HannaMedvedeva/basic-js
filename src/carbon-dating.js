const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
const CONSTNUMBER = 0.693;

module.exports = function dateSample(sampleActivity) {

  if (typeof (+sampleActivity) != Number) {
    return false;
  }
  let activityRate = MODERN_ACTIVITY / sampleActivity;
  let k = CONSTNUMBER / HALF_LIFE_PERIOD;
  let result = Math.ceil((Math.log(activityRate)) / k);
  return result;
};
