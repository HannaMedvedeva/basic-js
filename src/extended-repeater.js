const CustomError = require("../extensions/custom-error");

module.exports = function repeater(string,
  { repeatTimes = 1,
    separator = "+",
    additionRepeatTimes = 1,
    additionSeparator = "|",
    addition = ""
  }) {
  const addArr = new Array(additionRepeatTimes).fill(String(addition));
  const notRepeatedStr = String(string) + addArr.join(additionSeparator);
  const strArr = new Array(repeatTimes).fill(notRepeatedStr);
  return strArr.join(separator);

};
