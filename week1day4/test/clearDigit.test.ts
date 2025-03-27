import { expect, test } from "bun:test";

import { clearDigit } from "../clearDigit";

test("Expect empty", () => {
    expect(clearDigit("po49")).toBe("");
});

test("Expect po", () => {
    expect(clearDigit("49po")).toBe("po");
});

test("Expect ao", () => {
    expect(clearDigit("asd8sx5a961os3")).toBe("ao");
});
