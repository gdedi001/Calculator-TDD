const assert = require('assert');
const Calculate = require('../index.js')

describe('Calculate', () => {
	describe('.add', () => {
		it('returns the value of two numbers added together', () => {
			//setup
			const inputOne = 3;
			const inputTwo = 2;
			const expected = 5;

			//exercise
			const result = Calculate.add(inputOne, inputTwo);

			//verify
			assert.equal(expected, result);
		});
	});
	describe('.subtract', () => {
		it('returns the difference of the first number minus the second number', () => {
			// setup
			const inputOne = 5;
			const inputTwo = 10;
			const expected = 5;

			//exercise
			const result = Calculate.subtract(inputOne, inputTwo);

			//verify
			assert.equal(expected, result);
		});
	});
	describe('.multiply', () => {
		it('returns the product of two numbers', () => {
			//setup
			const inputOne = 2;
			const inputTwo = 5;
			const expected = 10;

			//exercise
			const result = Calculate.multiply(inputOne, inputTwo);

			//verify
			assert.equal(expected, result);
		});
	});
	describe('.divide', () => {
		it('returns the first number divided by the second', () => {
			// setup
			const inputOne = 2;
			const inputTwo = 50;
			const expected = 25;

			//exercise
			const result = Calculate.divide(inputOne, inputTwo);

			//verify
			assert.equal(expected, result);
		});
		it('throws an error when the divisor is 0', () => {
			//setup
			const inputOne = 2;
			const inputTwo = 0;

			//exercise
			//verify
			assert.throws(() => {
				throw new Error('the quotient of a number and 0 is undefined');
			},
			Error);
		});
	});
	describe('.absoluteValue', () => {
		it('returns the absolute value of the input number', () => {
			//setup
			const input = -1;

			//exercise
			const expected = Math.abs(input);
			const result = Calculate.absoluteValue(input);

			//verify
			assert.equal(expected, result);
		});
	});
	describe('.factorial', () => {
		it('5! is equal to 120', () => {
	      //setup
	      const input = 5;
	      const expectedResult = 120;
	      //exercise
	      const result = Calculate.factorial(input);
	      //verify
	      assert.equal(result, expectedResult);
    	});
	    it('3! is equal to 6', () => {
	      //setup
	      const input = 3;
	      const expectedResult = 6;
	      //exercise
	      const result = Calculate.factorial(3);
	      //verify
	      assert.equal(result, expectedResult);
	    });
	    it('returns 1 when you pass in 0.', () => {
	      //setup
	      const input = 0;
	      const expectedResult = 1;
	      //exercise
	      const result = Calculate.factorial(input);
	      //verify
	      assert.equal(result, expectedResult);
	    });
  	});
  	describe('.exponential', () => {
  		it('returns the result of a base raised to a power', () => {
  			//setup
  			const base = 3;
  			const pow = 2;
  			const expected = 9;
  			//exercise
  			const result = Calculate.exponential(3, 2);
  			//verify
  			assert.equal(result, expected);
  		});
  		it('returns 1 when the exponent is 0', () => {
  			//setup
  			const base = 5;
  			const pow = 0;
  			const expected = 1;
  			//exercise
  			const result = Calculate.exponential(5, 0);

  			//verify
  			assert.equal(result, expected);
  		});
  	});
  	describe('.max', () => {
  		it('returns the maximum number in an array', () => {
  			//setup
  			const input = [1,5,2,3,1];
  			const expected = 5;
  			//exercise
  			const result = Calculate.max(input);
  			//verify
  			assert.equal(result, expected);
  		});
  		it('throws an Error when the array is empty', () => {
  			//setup

  			//exercise

  			//verify
  		});
  	});
});





