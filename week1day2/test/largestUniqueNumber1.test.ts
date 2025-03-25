import { expect, test } from "bun:test";

import { largestUniqueNumber } from "../largestUniqueNumber1";

test("Expect 2000", () => {
  const nums = [1, 755, 5, 8, 9, 2000, 366];
  expect(largestUniqueNumber(nums)).toBe(2000);
});

test("Expect -1", () => {
  const nums = [1, 2, 3, 2, 1, 3];
  expect(largestUniqueNumber(nums)).toBe(-1);
});
