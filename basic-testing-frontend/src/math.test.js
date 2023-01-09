//  import {test} from 'vitest'
//  or
import { expect, it } from 'vitest'; // exactly same as test

import { add } from './math';

it('Should sum all the numbers of an array', () => {
   // actual testing code, the test runner will execute this function

   // The AAA Pattern

   // Arrange phase
   const numbers = [1, 2, 3];
   const expectedResult = numbers.reduce((acc, curr) => (acc += curr), 0);

   // Act
   const result = add(numbers);

   // Assertion
   expect(result).toBe(expectedResult);
});

it('Should throw NaN if at least one invalid number is provided', () => {
   const numbers = [1, 'invalid', 3];
   const expectedResult = numbers.reduce((acc, curr) => (acc += curr), 0);

   // Act
   const result = add(numbers);

   // Assertion
   expect(result).toBeNaN();
});

it('Should give the correct result if an array of numeric string value is provided', () => {
   const numbers = ['1', '2'];
   const expectedResult = numbers.reduce((acc, curr) => +acc + +curr, 0);

   // Act
   const result = add(numbers);

   // Assertion
   expect(result).toBe(expectedResult);
});

it('Should return 0 if empty array is provided', () => {
   const numbers = [];

   // Act
   const result = add(numbers);

   // Assertion
   expect(result).toBe(0);
});

it('Should throw an error if multiple args is provided', () => {
   // Arrange
   const number1 = 1;
   const number2 = 2;

   // Act
   // for catching the errors we need to wrap it in a extra function or use try catch
   const resultFunc = () => {
      add(number1, number2);
   };

   // Assertion
   // expect(resultFunc).toThrow()
   expect(resultFunc).toThrow(/is not iterable/); // error contain `is not iterable`

   // alternate approach could be
   // try{
   //    add(number1, number2);

   // }catch(err) {
   //    console.log(err)

   //    expect(err).toBeDefined();
   // }
});
