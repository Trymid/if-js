export { palindrome, searchForMatches };
import { data } from "../constants/constants.js";

function palindrome(str) {
  return str === str.split('').reverse().join('');
}

console.log(palindrome('шалаш'));



const testString = 'germ HoteL, rusSia,Bali ';

function searchForMatches(str) {
  if (!str || !(typeof str === 'string')) {
    return [];
  }
  const request = str.toLowerCase().match(/([\w])+/gi);
  console.log(request);

  return data.reduce((acc, object) => {
    const values = Object.values(object).join(' ').toLowerCase();

    const result = request.some((word) => {
      if (values.match(word)) {
        return true;
      }
    })

    if (result) acc.push(`${object.country}, ${object.city}, ${object.hotel}`);
  return acc;
  }, []);
}

console.log(searchForMatches(testString));