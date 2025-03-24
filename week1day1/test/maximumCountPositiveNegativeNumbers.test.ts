import { expect, test } from "bun:test";

import { maximumCountPositiveNegative } from "../maximumCountPositiveNegativeNumbers";

test("Expect positive win with 14 different", () => {
  const result = maximumCountPositiveNegative([
    7, 6, -1000, 1, 0, 7, 0, 6, 0, 7, 4, 6, 5, 0, 1, 6, 8, 0, 7, 1, 4,
  ]);
  expect(result.winnerGroup).toBe("positive");
  expect(result.diffBetweenGroup).toBe(14);
});

test("Not allow empty array", () => {
  const result = maximumCountPositiveNegative([]);
  expect(result.winnerGroup).toBe("N/A");
  expect(result.diffBetweenGroup).toBe(0);
});

test("All zeros", () => {
  const result = maximumCountPositiveNegative([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  expect(result.winnerGroup).toBe("N/A");
  expect(result.diffBetweenGroup).toBe(0);
});
