const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!date) {
    return "Unable to determine the time of year!";
  }
  if (!date instanceof Date || date.hasOwnProperty('toString')) {
    throw new Error("where the money, Lebowski?");
  }
  let month = date.getMonth();
  if (month < 2 || month == 11) {
    return "winter";
  } else if (month < 5) {
    return "spring";
  } else if (month < 8) {
    return "summer"
  } else return "autumn";
};
