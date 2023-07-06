import { palindrome, searchForMatches } from '../src/scripts/lesson-6';


test("Test function 'palindrome'", () => {
  const input1 = 'шалаш';
  const input2 = 'шабаш';
  const input3 = 'анна';
  const input4 = 'абба';
  const input5 = 'палаш';
  const input6 = 'борода';

  expect(palindrome(input1)).toBeTruthy();
  expect(palindrome(input2)).toBeTruthy();
  expect(palindrome(input3)).toBeTruthy();
  expect(palindrome(input4)).toBeTruthy();
  expect(palindrome(input5)).toBeFalsy();
  expect(palindrome(input6)).toBeFalsy();
});

describe('Finds all words from the query and displays an array with the country, city, hotel in a row', () => {
  // const DATA = data;
  test('should output correct data', () => {
    const input = 'germ HoteL, rusSia,Bali ';
    const output = [
      'Russia, Saint Petersburg, Hotel Leopold',
      'Germany, Berlin, Hostel Friendship',
      'Indonesia, Bali, Ubud Bali Resort&SPA',
      'Marocco, Ourika, Rokoko Hotel',
      'Germany, Berlin, Hotel Rehberge Berlin Mitte',
    ];

    expect(searchForMatches(input)).toEqual(output);
  });

  test('should output empty array', () => {
    const input = '';
    const input1 = false;
    const input2 = null;
    const input3 = undefined;
    const input4 = 0;
    const input5 = [];
    const input6 = {};
    const output = [];
    expect(searchForMatches(input)).toEqual(output);
    expect(searchForMatches(input1)).toEqual(output);
    expect(searchForMatches(input2)).toEqual(output);
    expect(searchForMatches(input3)).toEqual(output);
    expect(searchForMatches(input4)).toEqual(output);
    expect(searchForMatches(input5)).toEqual(output);
    expect(searchForMatches(input6)).toEqual(output);
  });
});
