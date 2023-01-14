import { expect, it } from 'vitest';
import { transformToNumber } from './numbers.js';

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
