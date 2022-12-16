import divide from "../src/divide.js";

// Positive testing

test('6 divided by 3 gives 2', () => {
    expect(divide(6, 3)).toEqual(2);
});

test('6 divided by 4 gives 1.5', () => {
    expect(divide(6, 4)).toEqual(1.5);
});

test('6 divided by 1 gives 6', () => {
    expect(divide(6, 1)).toEqual(6);
});

test('3 divided by 6 gives 0.5', () => {
    expect(divide(3, 6)).toEqual(0.5);
});

// Negative testing

// No negative testing is done as the module specifications do not specify how
// invalid inputs or other invalid values should be handled
// Before unit testing for invalid values can be implemted
// Error behaviour of the system should be specified