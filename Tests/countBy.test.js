import countBy from "../src/countBy.js";

// Positive testing

test('Counting active values from users should give { true: 2, false: 1 }', () => {
    const users = [
        { 'user': 'barney', 'active': true },
        { 'user': 'betty', 'active': true },
        { 'user': 'fred', 'active': false } ]
        
    expect(countBy(users, value => value.active)).toEqual({ 'true': 2, 'false': 1 });
});

// Negative testing

// Negative testing done to the module is limited
// Before negative testing for invalid paramaters and limits can be implemented
// Moudule error behaviour should be specified
  