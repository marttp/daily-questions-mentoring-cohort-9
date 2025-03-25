import { expect, test } from "bun:test";

import {
  largestUniqueNumberWithoutAdditionalMemory,
  largestUniqueNumberWithoutAdditionalMemory2,
} from "../largestUniqueNumber2";

test("Expect 2000 - [1]", () => {
  const nums = [1, 755, 5, 8, 9, 2000, 366];
  expect(largestUniqueNumberWithoutAdditionalMemory(nums)).toBe(2000);
});

test("Expect -1 [1]", () => {
  const nums = [1, 2, 3, 2, 1, 3];
  expect(largestUniqueNumberWithoutAdditionalMemory(nums)).toBe(-1);
});

test("Expect 1 [1]", () => {
  const nums = [1];
  expect(largestUniqueNumberWithoutAdditionalMemory(nums)).toBe(1);
});

test("Expect 4 [1]", () => {
  const nums = [1, 4];
  expect(largestUniqueNumberWithoutAdditionalMemory(nums)).toBe(4);
});

test("Expect 2000 - [2]", () => {
  const nums = [1, 755, 5, 8, 9, 2000, 366];
  expect(largestUniqueNumberWithoutAdditionalMemory2(nums)).toBe(2000);
});

test("Expect -1 [2]", () => {
  const nums = [1, 2, 3, 2, 1, 3];
  expect(largestUniqueNumberWithoutAdditionalMemory2(nums)).toBe(-1);
});