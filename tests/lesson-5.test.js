import { correctDate, date } from '../src/scripts/lesson-5';

test("Function change date format from 'yy/mm/dd' to 'dd/mm/yy'", () => {
  const result = typeof date;
  expect(date).toBeTruthy();
  expect(result).toBe('string');
  expect(correctDate('2020-11-26')).toBe('26.11.2020');
});
