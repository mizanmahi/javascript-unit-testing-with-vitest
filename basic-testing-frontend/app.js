import { extractNumberValues } from './src/parser.js';

import { calculateResult } from './src/math.js';
import { generateResultText, outputResultText } from './src/output.js';

const form = document.querySelector('form');

function formSubmitHandler(event) {
   event.preventDefault();

   const numberValues = extractNumberValues(form);
   let result = calculateResult(numberValues);
   const resultText = generateResultText(result);
   
   outputResultText(resultText);
}

form.addEventListener('submit', formSubmitHandler);
