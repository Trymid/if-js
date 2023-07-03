import { correctDate, searchForMatches } from '../src/scripts/lesson-5';

describe("Function change date format from 'yy/mm/dd' to 'dd/mm/yy'", () => {
  test("should display the correct information with the correct input", () => {
    const date = '2020-11-26';
    expect(correctDate(date)).toBe('26.11.2020');
  });

  test("should return 0", () => {
    const input = '';
    const input1 = false;
    const input2 = null;
    const input3 = undefined;
    const input4 = 0;
    const input5 = [];
    const input6 = {};
    const output = 0;
    expect(correctDate(input)).toBe(output);
    expect(correctDate(input1)).toBe(output);
    expect(correctDate(input2)).toBe(output);
    expect(correctDate(input3)).toBe(output);
    expect(correctDate(input4)).toBe(output);
    expect(correctDate(input5)).toBe(output);
    expect(correctDate(input6)).toBe(output);
  });
})



describe("Finds all words from the query and displays an array with the country, city, hotel in a row", () => {
  const DATA = [
    {
      country: 'Russia',
      city: 'Saint Petersburg',
      hotel: 'Hotel Leopold',
    },
    {
      country: 'Spain',
      city: 'Santa Cruz de Tenerife',
      hotel: 'Apartment Sunshine',
    },
    {
      country: 'Slowakia',
      city: 'Vysokie Tatry',
      hotel: 'Villa Kunerad',
    },
    {
      country: 'Germany',
      city: 'Berlin',
      hotel: 'Hostel Friendship',
    },
    {
      country: 'Indonesia',
      city: 'Bali',
      hotel: 'Ubud Bali Resort&SPA',
    },
    {
      country: 'Netherlands',
      city: 'Rotterdam',
      hotel: 'King Kong Hostel',
    },
    {
      country: 'Marocco',
      city: 'Ourika',
      hotel: 'Rokoko Hotel',
    },
    {
      country: 'Germany',
      city: 'Berlin',
      hotel: 'Hotel Rehberge Berlin Mitte',
    },
  ];

  test("should output correct data", () => {
    const input = 'germ HoteL, rusSia,Bali ';
    const output = [
      'Russia, Saint Petersburg, Hotel Leopold',
      'Germany, Berlin, Hostel Friendship',
      'Indonesia, Bali, Ubud Bali Resort&SPA',
      'Marocco, Ourika, Rokoko Hotel',
      'Germany, Berlin, Hotel Rehberge Berlin Mitte'
    ]

    expect(searchForMatches(input)).toEqual(output);
  });

  test("should output empty array", () => {
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

