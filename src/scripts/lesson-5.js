export { correctDate, searchForMatches };

const date = '2020-11-26';

function correctDate(date) {
  if (!date || !(typeof date === 'string')) {
    return 0;
  }
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
  if (!str || !(typeof str === 'string')) {
    return [];
  }
  const request = str.toLowerCase().match(/([\w])+/gi);
  console.log(request);

  return DATA.reduce((acc, object) => {
    let temp = '';

    for (const key in object) {
      for (const word of request) {
        if (object[key].toLowerCase().match(word)) {
          temp = `${object.country}, ${object.city}, ${object.hotel}`;
          acc.push(temp);
          break;
        }
      }
      if (temp) {
        break;
      }
    }
    return acc;
  }, []);
}

console.log(searchForMatches(testString));
