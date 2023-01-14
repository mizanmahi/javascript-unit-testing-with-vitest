import { describe, expect, it } from 'vitest';
import { transformToNumber, cleanNumbers } from './numbers.js';

describe('transformToNumber()', () => {
   it('Should return a number if a numeric string was given', () => {
      // Arrange
      const stringNumber = '5';

      // Act
      const result = transformToNumber(stringNumber);

      // Assertion
      expect(result).toBeTypeOf('number');
   });

   it('Should return a number if a numeric string was given', () => {
      // Arrange
      const stringNumber = '5';

      // Act
      const result = transformToNumber(stringNumber);

      // Assertion
      expect(result).toBe(+stringNumber);
   });

   it('Should return NaN if a non-transformable string was given', () => {
      // Arrange
      const invalidString = 'invalid';

      // Act
      const result = transformToNumber(invalidString);

      // Assertion
      expect(result).toBeNaN();
   });
});

describe('cleanNumbers()', () => {
   //! this is in the end an integration test because this function is testing multiple function implicitly
   it('should return an array of number values if a array of string number value is provided', () => {
      // Arrange
      const numbersArray = ['2', '5'];

      // Act
      const result = cleanNumbers(numbersArray);

      // Assertion
      // expect(result).toStrictEqual(numbersArray.map((n) => +n));
      expect(result[0]).toBeTypeOf('number');
   });

   it('should', () => {
      const numbers = ['', 5];

      const resultFunc = () => cleanNumbers(numbers);

      expect(resultFunc).toThrow();
   });
});
