import {obj1, obj2, obj3} from '../constants/constants';

export {deepEqual, getCalendarMonth};

const deepEqual = (object1, object2) => {
  const foundObjects = [object1, object2];
  const result = [];
  for (let i = 0; i < foundObjects.length; i++) {
    result[i] = [];

    const nesting2 = item => {
      const keysArray = Object.keys(item).sort();
      keysArray.forEach((key) => {
        if (typeof item[key] === 'object' && item[key]) {
          const temp = JSON.stringify(item[key]).split('').sort().join('');
          result[i].push([key, temp]);
          nesting2(item[key]);
        } else {
          result[i].push([key, item[key]]);
        }
      });
    };
    nesting2(foundObjects[i]);
  }
  return String(result[0]) === String(result[1]);
};
console.log(deepEqual(obj1, obj2));


const daysInMonth = 30;
const daysInWeek = 7;
const dayOfWeek = 4; // starts from 0;
const range = [29, 15];
const calendarMonth = getCalendarMonth(
  daysInMonth,
  daysInWeek,
  dayOfWeek,
  range,
);

function getCalendarMonth(
  daysInMonth,
  daysInWeek,
  dayOfWeek,
  rangeSelectedDays,
) {
  if (dayOfWeek < 0 || dayOfWeek >= daysInWeek) {
    return 'Incorrect number of days in week';
  }

  rangeSelectedDays.sort((a, b) => {
    return a - b;
  });

  const [checkInDate, checkOutDate] = rangeSelectedDays;
  const lastDaysOfArray = daysInWeek - ((daysInMonth + dayOfWeek) % daysInWeek);
  const daysAmount = dayOfWeek + daysInMonth + lastDaysOfArray;

  const startDate = ((daysInWeek, dayOfWeek) => {
    if (dayOfWeek === 0) {
      return 1;
    }
    return daysInMonth - (dayOfWeek - 1);
  })(daysInWeek, dayOfWeek);

  const result = [];
  const datesArray = [];

  for (let i = 0; i < dayOfWeek; i++) {
    datesArray[i] = {
      dayOfMonth: startDate + i, // required field - день месяца
      notCurrentMonth: true, // optional field - день не входит в текущий месяц
      selectedDay: false, // optional field - выбранный пользователем день
    };
  }

  for (let i = 0; i < daysInMonth; i++) {
    datesArray.push({
      dayOfMonth: i + 1,
      notCurrentMonth: false,
      selectedDay: false,
    });
  }

  for (let i = 0; i < lastDaysOfArray; i++) {
    datesArray.push({
      dayOfMonth: i + 1,
      notCurrentMonth: true,
      selectedDay: false,
    });
  }

  let week = [];

  for (let i = 1; i < daysAmount + 1; i++) {
    if (!datesArray[i - 1].notCurrentMonth) {
      if (
        checkInDate <= datesArray[i - 1].dayOfMonth &&
        datesArray[i - 1].dayOfMonth <= checkOutDate
      ) {
        datesArray[i - 1].selectedDay = true;
      }
    }
    week.push(datesArray[i - 1]);
    if (i % daysInWeek === 0) {
      result.push(week);
      week = [];
    }
  }
  return result;
}

console.log(calendarMonth);
