import { expect, test } from "bun:test";

import { bothGroupStudent } from "../bothGroupStudent";

test("Expect found [Mart, Cloud]", () => {
  const groupA = [
    { id: 1, name: "Mart" },
    { id: 2, name: "Cloud" },
    { id: 3, name: "Sephiroth" },
    { id: 4, name: "Zack" },
  ];
  const groupB = [
    { id: 2, name: "Cloud" },
    { id: 6, name: "Tifa" },
    { id: 7, name: "Aerith" },
    { id: 1, name: "Mart" },
  ];
  expect(bothGroupStudent(groupA, groupB)).toContainValues([
    { id: 2, name: "Cloud" },
    { id: 1, name: "Mart" },
  ]);
});
