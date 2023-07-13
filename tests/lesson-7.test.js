import {
  obj1,
  obj2,
  obj3,
  obj4,
  obj5,
  obj6,
  obj7,
} from '../src/constants/constants';
import {deepEqual, getCalendarMonth} from '../src/scripts/lesson-7';

describe('deepEqual function that can compare 2 objects with different levels of nesting', () => {
  test('Should return true', () => {
    expect(deepEqual(obj1, obj2)).toBeTruthy();
    expect(deepEqual(obj1, obj1)).toBeTruthy();
  });

  test("Should return false", () => {
    expect(deepEqual(obj1, obj3)).toBeFalsy();
    expect(deepEqual(obj2, obj4)).toBeFalsy();
    expect(deepEqual(obj4, obj5)).toBeFalsy();
    expect(deepEqual(obj4, obj6)).toBeFalsy();
    expect(deepEqual(obj6, obj5)).toBeFalsy();
    expect(deepEqual(obj6, obj7)).toBeFalsy();
  });
});

describe('calendarMonth function returns a two-dimensional array of objects', () => {
  const daysInMonth = 31;
  const daysInWeek = 5;
  const dayOfWeek = 0;
  const range = [23, 5];
  const answer = [
    [
      {dayOfMonth: 1, notCurrentMonth: false, selectedDay: false},
      {dayOfMonth: 2, notCurrentMonth: false, selectedDay: false},
      {dayOfMonth: 3, notCurrentMonth: false, selectedDay: false},
      {dayOfMonth: 4, notCurrentMonth: false, selectedDay: false},
      {dayOfMonth: 5, notCurrentMonth: false, selectedDay: true}
    ],
    [
      {dayOfMonth: 6, notCurrentMonth: false, selectedDay: true},
      {dayOfMonth: 7, notCurrentMonth: false, selectedDay: true},
      {dayOfMonth: 8, notCurrentMonth: false, selectedDay: true},
      {dayOfMonth: 9, notCurrentMonth: false, selectedDay: true},
      {dayOfMonth: 10, notCurrentMonth: false, selectedDay: true}
    ],
    [
      {dayOfMonth: 11, notCurrentMonth: false, selectedDay: true},
      {dayOfMonth: 12, notCurrentMonth: false, selectedDay: true},
      {dayOfMonth: 13, notCurrentMonth: false, selectedDay: true},
      {dayOfMonth: 14, notCurrentMonth: false, selectedDay: true},
      {dayOfMonth: 15, notCurrentMonth: false, selectedDay: true}
    ],
    [
      {dayOfMonth: 16, notCurrentMonth: false, selectedDay: true},
      {dayOfMonth: 17, notCurrentMonth: false, selectedDay: true},
      {dayOfMonth: 18, notCurrentMonth: false, selectedDay: true},
      {dayOfMonth: 19, notCurrentMonth: false, selectedDay: true},
      {dayOfMonth: 20, notCurrentMonth: false, selectedDay: true}
    ],
    [
      {dayOfMonth: 21, notCurrentMonth: false, selectedDay: true},
      {dayOfMonth: 22, notCurrentMonth: false, selectedDay: true},
      {dayOfMonth: 23, notCurrentMonth: false, selectedDay: true},
      {dayOfMonth: 24, notCurrentMonth: false, selectedDay: false},
      {dayOfMonth: 25, notCurrentMonth: false, selectedDay: false}
    ],
    [
      {dayOfMonth: 26, notCurrentMonth: false, selectedDay: false},
      {dayOfMonth: 27, notCurrentMonth: false, selectedDay: false},
      {dayOfMonth: 28, notCurrentMonth: false, selectedDay: false},
      {dayOfMonth: 29, notCurrentMonth: false, selectedDay: false},
      {dayOfMonth: 30, notCurrentMonth: false, selectedDay: false}
    ],
    [
      {dayOfMonth: 31, notCurrentMonth: false, selectedDay: false},
      {dayOfMonth: 1, notCurrentMonth: true, selectedDay: false},
      {dayOfMonth: 2, notCurrentMonth: true, selectedDay: false},
      {dayOfMonth: 3, notCurrentMonth: true, selectedDay: false},
      {dayOfMonth: 4, notCurrentMonth: true, selectedDay: false}
    ]
  ]

  test('Should return two-dimensional array', () => {
    expect(getCalendarMonth(daysInMonth, daysInWeek, dayOfWeek, range)).toEqual(answer);
    expect(getCalendarMonth(daysInMonth, daysInWeek, dayOfWeek, range)).toEqual(answer);
  });

  test('Should return message about error', () => {
    const dayOfWeek = 8;
    expect(getCalendarMonth(daysInMonth, daysInWeek, dayOfWeek, range)).toBe('Incorrect number of days in week');
  });
});
