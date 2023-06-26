export { correctDate, date };

const date = '2020-11-26';

function correctDate(date) {
  const temp = date.match(/\d+/gi);
  return `${temp[2]}.${temp[1]}.${temp[0]}`;
}

console.log(correctDate(date));

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

const testString = 'germ HoteL, rusSia,Bali ';

function searchForMatches(str) {
  const request = str.toLowerCase().match(/([\w])+/gi);
  console.log(request);
  const result = [];

  for (const item of DATA) {
    for (const key in item) {
      let temp = 0;
      for (const word of request) {
        temp = item[key].toLowerCase().match(word);
        if (temp) {
          break;
        }
      }
      if (temp) {
        result.push(`${item.country}, ${item.city}, ${item.hotel}`);
        break;
      }
    }
  }
  return result;
}

console.log(searchForMatches(testString));
