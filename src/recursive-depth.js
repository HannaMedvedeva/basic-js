const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  constructor() {
    this.result = 0;
    this.depth = 0;
  }


  calculateDepth(array) {
    if (Array.isArray(array)) {
      this.depth++;
      for (let i = 0; i < array.length; i++) {
        this.calculateDepth(array[i]);
      }
      this.result = this.result > this.depth ? this.result : this.depth;
      this.depth--;
    }
    
    const returnValue = this.result;
    if (this.depth == 0) {
      this.result = 0;
    } 

    return returnValue;
  };

}
