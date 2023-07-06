import { palindrome, searchForMatches, getCities } from '../src/scripts/lesson-6';
import { hotels } from "../src/constants/constants.js";

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

describe("Function that selects all unique countries and matches cities with them", () => {
  test("Should return correct data", () => {
    // const input = hotels;
    const output = {
      Russia: [ 'Saint Petersburg' ],
      Spain: [ 'Santa Cruz de Tenerife', 'Ibiza' ],
      Slowakia: [ 'Vysokie Tatry' ],
      Germany: [ 'Berlin', 'Hamburg' ],
      Ukraine: [ 'Kyiv' ],
      Mexico: [ 'Guadalupe' ],
      Switzerland: [ 'Interlaken' ],
      Malaysia: [ 'Port Dickson', 'Port Dickson' ],
      USA: [ 'Chicago', 'Hawaii', 'Miami' ],
      'United Arab Emirates': [ 'Dubai' ],
      'South Korea': [ 'Seoul' ],
      Italy: [ 'Florence', 'Rome' ],
      Indonesia: [ 'BTDC, Nuca Dua' ],
      Japan: [ 'Tokyo' ],
      Turkey: [ 'Istanbul' ],
      Poland: [ 'Krakow', 'Gdansk' ],
      Greece: [ 'Santorini' ],
      Netherlands: [ 'Amsterdam' ],
      Brazil: [ 'Fortaleza' ],
      Australia: [ 'Sydney' ],
      France: [ 'Nice' ],
      UK: [ 'London', 'Edinburgh' ],
      Austria: [ 'Vienna' ]
    }

    expect(getCities(hotels)).toEqual(output);
  });

  test('should output empty object', () => {
    const input = '';
    const input1 = false;
    const input2 = null;
    const input3 = undefined;
    const input4 = 0;
    const input5 = [];
    const input6 = {};
    const output = {};
    expect(getCities(input)).toEqual(output);
    expect(getCities(input1)).toEqual(output);
    expect(getCities(input2)).toEqual(output);
    expect(getCities(input3)).toEqual(output);
    expect(getCities(input4)).toEqual(output);
    expect(getCities(input5)).toEqual(output);
    expect(getCities(input6)).toEqual(output);
  });
})
