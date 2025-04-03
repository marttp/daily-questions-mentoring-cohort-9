import { expect, test } from "bun:test";

import { appendDollarAfterYou } from "../solution";

test(`Expect "iojuaspoUfj"`, () => {
    expect(appendDollarAfterYou("iojuaspoUfj")).toEqual("ioju$aspoU$fj");
});

test(`Expect "iojaspofj"`, () => {
    expect(appendDollarAfterYou("iojaspofj")).toEqual("iojaspofj");
});