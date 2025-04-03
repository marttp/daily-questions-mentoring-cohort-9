import { expect, test } from "bun:test";

import {
  isAnagramEachOther,
  groupAnagrams1,
  groupAnagrams2,
} from "../solution";

test("Expected true", () => {
    expect(isAnagramEachOther("listen", "silent")).toBe(true);
});

test("Expected false", () => {
    expect(isAnagramEachOther("hello", "world")).toBe(false);
});

test(`Expected [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]`, () => {
  expect(
    groupAnagrams1(["eat", "tea", "tan", "ate", "nat", "bat"])
  ).toContainAllValues([["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]);
});

test(`Expected [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]`, () => {
  expect(
    groupAnagrams2(["eat", "tea", "tan", "ate", "nat", "bat"])
  ).toContainAllValues([["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]);
});