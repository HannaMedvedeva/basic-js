const CustomError = require("../extensions/custom-error");

module.exports = function transform(array) {
  const isCommand = command => ["--double-prev", "--double-next", "--discard-prev", "--discard-next"].includes(command);
  const isExist = element => typeof element != "undefined";
  const isCorrect = element => isExist(element) && !isCommand(element);

  if (!Array.isArray(array))
    throw new Error("input is not an array");

  const result = [];
  let i = 0;
  while (i < array.length) {
    const element = array[i];
    if (isCommand(element)) {
      const next = array[i + 1];
      const previous = result[result.length - 1];

      switch (element) {
        case "--double-next":
          isCorrect(next) && result.push(next);
          break;

        case "--discard-prev":
          isCorrect(previous) && result.pop();
          break;

        case "--discard-next":
          isCorrect(next) && result.push('--discard-next'), i++;
          break;

        case "--double-prev":
          isCorrect(previous) && result.push(previous);
          break;
      }
    } else {
      result.push(element);
    }
    i++;
  }
  return result.filter(el => !isCommand(el));
}