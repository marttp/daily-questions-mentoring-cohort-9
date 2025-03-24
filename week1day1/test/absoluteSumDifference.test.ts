import { expect, test } from "bun:test";

import { absoluteSumDiff } from "../absoluteSumDifference";

test("Expect positive win with 4 different", () => {
  const result = absoluteSumDiff([8, 5, -2, -7]);
  expect(result.winnerGroup).toBe("positive");
  expect(result.diffBetweenGroup).toBe(4);
});

test("Expect negative win with 4 different", () => {
  const result = absoluteSumDiff([8, 5, -6, -11]);
  expect(result.winnerGroup).toBe("negative");
  expect(result.diffBetweenGroup).toBe(4);
});
