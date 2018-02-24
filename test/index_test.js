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
			const result = Calculate.divided(inputOne, inputTwo);

			//verify
			assert.equal(expected, result);
		});
		it('throws an error when the divisor is 0', () => {
			//setup

			//exercise

			//verify
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
});





