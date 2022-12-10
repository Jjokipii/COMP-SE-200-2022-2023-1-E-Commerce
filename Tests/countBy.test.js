import countBy from "../src/countBy.js";

const users = [
    { 'user': 'barney', 'active': true },
    { 'user': 'betty', 'active': true },
    { 'user': 'fred', 'active': false }
]

test('Counting active values from users should give { true: 2, false: 1 }', () => {
    expect(countBy(users, value => value.active)).toEqual({ 'true': 2, 'false': 1 });
});

// Negative testing

test('Incorrect parameter 1 returns TypeError', () => {
    expect(countBy("a", 1.111)).toThrowError(TypeError);
});
  
test('Incorrect parameter 2 returns TypeError', () => {
    expect(countBy(1.111, "a")).toThrowError(TypeError);
});
  
test('Incorrect parameter 3 returns TypeError', () => {
    expect(countBy(1.111, "a")).toThrowError(TypeError);
});