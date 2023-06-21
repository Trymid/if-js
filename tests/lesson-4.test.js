// import { randProductName, randNumber } from "@ngneat/falso";
import {sum, addProduct} from "../scripts/lesson-4";

// test('When adding new valid product, get successfull confirmation', () => {
//   const name = randProductName();
//   const price = randNumber();
//   console.log(name, price)
//
//   expect(addProduct(name, price)).toBe(true);
// });


test("When launch function 'sum'", () => {
  expect(sum(5)(3)).toBe(8);
});