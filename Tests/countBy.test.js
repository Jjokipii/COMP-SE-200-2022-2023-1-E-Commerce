import countBy from "../src/countBy.js";

// Positive testing

const users = [
    { 'user': 'barney', 'active': true },
    { 'user': 'betty', 'active': true },
    { 'user': 'fred', 'active': false }
]

test('Counting active values from users should give { true: 2, false: 1 }', () => {
    expect(countBy(users, value => value.active)).toEqual({ 'true': 2, 'false': 1 });
});

// Negative testing

// No negative testing is done as the module specifications do not specify how
// invalid inputs or other invalid values should be handled
// Before unit testing for invalid values can be implemted
// Error behaviour of the system should be specified
  