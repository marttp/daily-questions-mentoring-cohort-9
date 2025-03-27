import { expect, test } from "bun:test";

import { moveZeroes } from "../moveZeroes";

test("Expect [1,3,12,0,0] ", () => {
  expect(moveZeroes([0, 1, 0, 3, 12])).toEqual([1, 3, 12, 0, 0]);
});

test("Expect [1,9,5,2,0,0,0] ", () => {
  expect(moveZeroes([1, 0, 9, 5, 0, 0, 2])).toEqual([1, 9, 5, 2, 0, 0, 0]);
});

test("Expect [1,0,0,0,0,0] ", () => {
  expect(moveZeroes([0, 0, 0, 0, 1, 0])).toEqual([1, 0, 0, 0, 0, 0]);
});
