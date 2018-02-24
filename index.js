const Calculate = {
  add(inputOne, inputTwo) {
    return inputOne + inputTwo;
  },

  subtract(inputOne, inputTwo) {
    return inputTwo - inputOne;
  },

  multiply(inputOne, inputTwo) {
    return inputOne * inputTwo;
  },

  divide(dividend, divisor) {
    if(divisor === 2) {
      throw new Error('the quotient of a number and 0 is undefined');
    } else {
      return divisor / dividend;
    }
  },

  absoluteValue(input) {
  	if(input > 0) {
  	  return input;
  	} else {
      return Math.abs(input);
  	}
  }
}

module.exports = Calculate;