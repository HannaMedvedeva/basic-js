const CustomError = require("../extensions/custom-error");

class ChainMaker {
  constructor() {
      this.result = [];
  }
  getLength() {
      return this.result.length;
  }
  addLink(value) {
      this.result.push(value);
      return this;
  }
  removeLink(position) {
      if (!Number.isInteger(position) || position > this.result.length) {
        this.result = [];
        throw new Error("position is incorrect");
      }
      this.result.splice(position - 1, 1);
      return this;
  }
  reverseChain() {
      this.result.reverse();
      return this;
  }
  finishChain() {
    
      const result = this.result
          .map(el => `( ${el ? el.toString() : el} )`)
          .join("~~");
      this.result = [];
      return result;
  }
};

module.exports = new ChainMaker();