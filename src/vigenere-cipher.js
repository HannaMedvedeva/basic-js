const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(arg) {
    this.direction = arg !== false;
    this.alphabetLength = 26;
    this.charCodeStart = 65;
  }
  encrypt(message, keyword) {
    return this.vigenereCiphering(message, keyword, this.encryptCharCode);
  }

  decrypt(message, keyword) {
    return this.vigenereCiphering(message, keyword, this.decryptCharCode);
  }

  vigenereCiphering(message, keyword, fn) {
    if (!message || !keyword) {
      throw new Error("must pass message and keyword");
    }
    const income = message.toUpperCase();
    let key = this.keyToMessageLength(keyword, income);

    let result = "";
    for (let i = 0; i < income.length; i++) {

      if (income.charCodeAt(i) > 64 && income.charCodeAt(i) < 91) {
        let charCode = fn(income, key, i);
        charCode = charCode < 0 ? charCode + this.alphabetLength : charCode;
        result += String.fromCharCode(charCode + this.charCodeStart);
      } else {
        result += income[i];
        key = key.slice(0, i) + " " + key.slice(i);
      }
    }

    result = this.direction ? result : result.split("").reverse().join("");
    return result;
  }

  decryptCharCode = (income, key, i) => {
    return (income.charCodeAt(i) - key.charCodeAt(i));
  };

  encryptCharCode = (income, key, i) => {
    return (income.charCodeAt(i) + key.charCodeAt(i) - this.charCodeStart * 2) % this.alphabetLength;
  };

  keyToMessageLength(keyword, income) {
    const key = keyword.toUpperCase();
    const repeatTimes = Math.floor(income.length / key.length);
    const diffPosition = income.length % key.length;
    const result = key.repeat(repeatTimes) + key.slice(0, diffPosition);

    return result;
  }
}

module.exports = VigenereCipheringMachine;
