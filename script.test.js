const get = require("./script");

const path = "a.b.d[1].e";
const myObj = { a: { b: { c: 1, d: [1, { e: 2 }] } } };

// test("adds 1 + 2 to equal 3", () => {
//     expect(sum(1, 2)).toBe(3);
// });

test("return true", () => {
    expect(get(path, myObj)).toBe(2); // testa o retorno  2 do meu myObj 
});
