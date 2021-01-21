const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(diskNum, turnsSpeed) {
  let turns = Math.pow(2, diskNum) - 1;
  let ternsPerSec = (turnsSpeed / 3600);
  let seconds = Math.floor(turns / ternsPerSec);
  return { turns: turns, seconds: seconds };
};
