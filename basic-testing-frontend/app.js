import { extractNumberValues } from './src/parser.js';

import { calculateResult } from './src/math.js';
import { generateResultText, outputResultText } from './src/output.js';

const form = document.querySelector('form');

function formSubmitHandler(event) {
   console.log('first');
   event.preventDefault();

   const numberValues = extractNumberValues(form);

   let result = calculateResult(numberValues);
   console.log(result);
   const resultText = generateResultText(result);
   console.log(resultText);

   outputResultText(resultText);
}

form.addEventListener('submit', formSubmitHandler);
