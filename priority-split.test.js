const prioritySplit = require("priority-split");

const example = "a,b.cdef.ghi!j";

test("Phrases under the character limit are not split.", ()=>{
    expect(
        prioritySplit(example, example.length, /[.]/)
    ).toEqual([example]);
});

test("Phrases over the character limit are recursively split by the given patterns in order", ()=>{
    expect(
        prioritySplit(example, 4, /[.]/, "!")
    ).toEqual(["a,b","cdef","ghi","j"]);
});