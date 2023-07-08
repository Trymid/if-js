export { palindrome, searchForMatches, getCities };
import { data, hotels } from '../constants/constants.js';

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


  return data.reduce((acc, object) => {
    const values = Object.values(object).join(' ').toLowerCase();

    const result = request.some((word) => {
      if (values.match(word)) return true;
    });

    if (result) acc.push(`${object.country}, ${object.city}, ${object.hotel}`);
    return acc;
  }, []);
}

console.log(searchForMatches(testString));

function getCities(array) {
  console.log(!(Array.isArray(array) && array.length > 0));
  if (!(Array.isArray(array) && array.length > 0)) {
    return {};
  }

  return array.reduce((acc, currentItem) => {
    if (!acc[currentItem.country]) {
      acc[currentItem.country] = [];
    }
    acc[currentItem.country].push(currentItem.city);
    return acc;
  }, {});
}
console.log(getCities(hotels));

const daysInMonth = 30;
const daysInWeek = 7;
const dayOfWeek = 4; // в моем примере понедельник равен 0. У вас может отличаться
const calendarMonth = getCalendarMonth(daysInMonth, daysInWeek, dayOfWeek);

function getCalendarMonth(daysInMonth, daysInWeek, dayOfWeek) {
  if (dayOfWeek < 0 || dayOfWeek >= daysInWeek) {
    return 'Incorrect number of days in week';
  }

  const lastDaysOfArray = daysInWeek - ((daysInMonth + dayOfWeek) % daysInWeek);
  const daysAmount = dayOfWeek + daysInMonth + lastDaysOfArray; // 35

  const startDate = ((daysInWeek, dayOfWeek) => {
    if (dayOfWeek === 0) {
      return 1;
    }
    return daysInMonth - (dayOfWeek - 1);
  })(daysInWeek, dayOfWeek);


  const result = [];
  const tempArray = [];

  for (let i = 0; i < dayOfWeek; i++) {
    tempArray[i] = startDate + i;
  }

  for (let i = 0; i < daysInMonth; i++) {
    tempArray.push(i + 1);
  }

  for (let i = 0; i < lastDaysOfArray; i++) {
    tempArray.push(i + 1);
  }

  console.log(tempArray);
  let anotherTempArray = [];

  for (let i = 1; i < daysAmount + 1; i++) {
    anotherTempArray.push(tempArray[i - 1]);
    if (i % daysInWeek === 0) {
      result.push(anotherTempArray);
      anotherTempArray = [];
    }
  }
  return result;
}

console.log(calendarMonth);
