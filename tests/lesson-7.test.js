import { obj1, obj2, obj3, obj4, obj5, obj6, obj7 } from "../src/constants/constants";
import { deepEqual} from "../src/scripts/lesson-7";

describe("deepEqual function that can compare 2 objects with different levels of nesting", () => {
  test("Should return true", () => {
    expect(deepEqual(obj1, obj2)).toBeTruthy();
    expect(deepEqual(obj1, obj1)).toBeTruthy();
    expect(deepEqual(obj6, obj7)).toBeTruthy();
  });

  // test("Should return false", () => {
  //   expect(deepEqual(obj1, obj3)).toBeFalsy();
  //   expect(deepEqual(obj2, obj4)).toBeFalsy();
  //   expect(deepEqual(obj4, obj6)).toBeFalsy();
  //   expect(deepEqual(obj6, obj5)).toBeFalsy();
  // });
  //
  // test("Should return message about wrong input", () => {
  //   expect(deepEqual(obj1, null)).toBe("Entered data is not correct");
  //   expect(deepEqual([], obj1)).toBe("Entered data is not correct");
  //   expect(deepEqual(obj2, undefined)).toBe("Entered data is not correct");
  //   expect(deepEqual(obj1, )).toBe("Entered data is not correct");
  // });
})


