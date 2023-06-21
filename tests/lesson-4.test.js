import { sum } from '../src/scripts/lesson-4';

test("When launch function 'sum'", () => {
  expect(sum(5)(3)).toBe(8);
});


