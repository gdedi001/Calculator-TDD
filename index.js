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
  },
  
  factorial(input) {
    //edge case
    if (input === 0) {
      return 1;
    }
    
    let val = 1;
    for (let i = input; i > 0; i--) {
      val *= i;
    }
    return val;
  },

  exponential(base, pow) {
    return Math.pow(base, pow);
  },

  max(arr) {
    //edge case
    if (arr.length === 0) {
      throw new Error("Error: empty array");
    }

    let max = 0;
    arr.forEach((num) => {
      if (num > max) {
        max = num;
      }
    });
    return max;
  }
}

module.exports = Calculate;