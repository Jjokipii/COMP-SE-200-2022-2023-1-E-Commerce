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
    expect(countBy("a", value => value.active)).toThrowError(TypeError);
});
  
test('Incorrect parameter 2 returns TypeError', () => {
    expect(countBy(users, "a")).toThrowError(TypeError);
});
  