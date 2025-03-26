import { expect, test } from "bun:test";

import {
  findMissingIntegers,
  findMissingIntegers2,
  findMissingIntegers3,
} from "../findMissingIntegers";

test("[1] Expect Missing [1, 2, 3]", () => {
  const nums = [5555, 39, 48];
  expect(findMissingIntegers(nums)).toEqual([1, 2, 3]);
});

test("[1] Expect Missing [1,3]", () => {
  const nums = [5555, 2, 48];
  expect(findMissingIntegers(nums)).toEqual([1, 3]);
});

test("[1] Expect Missing []", () => {
  const nums = [1, 2];
  expect(findMissingIntegers(nums)).toEqual([]);
});

test("[2] Expect Missing [1, 2, 3]", () => {
  const nums = [5555, 39, 48];
  expect(findMissingIntegers2(nums)).toEqual([1, 2, 3]);
});

test("[2] Expect Missing [1,3]", () => {
  const nums = [5555, 2, 48];
  expect(findMissingIntegers2(nums)).toEqual([1, 3]);
});

test("[2] Expect Missing []", () => {
  const nums = [1, 2];
  expect(findMissingIntegers2(nums)).toEqual([]);
});

test("[3] Expect Missing [1, 2, 3]", () => {
  const nums = [5555, 39, 48];
  expect(findMissingIntegers3(nums)).toEqual([1, 2, 3]);
});

test("[3] Expect Missing [1,3]", () => {
  const nums = [5555, 2, 48];
  expect(findMissingIntegers3(nums)).toEqual([1, 3]);
});

test("[3] Expect Missing []", () => {
  const nums = [1, 2];
  expect(findMissingIntegers3(nums)).toEqual([]);
});