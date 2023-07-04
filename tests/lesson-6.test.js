import {palindrome} from '../src/scripts/lesson-6';

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
})