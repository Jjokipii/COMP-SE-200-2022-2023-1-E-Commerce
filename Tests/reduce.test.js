import reduce from "../src/reduce.js";

// Positive testing

test('Reducing [1, 2] with (sum, n) => sum + n outputs 3', () => {
  expect(reduce([1, 2], (sum, n) => sum + n, 0)).toEqual(3);
});

test('Reducing { a: 1, b: 2, c: 1 } with (result, value, key) => {(result[value] || (result[value] = [])).push(key); return result}, {}) outputs { 1: [a, c], 2: [b] }', () => {
    expect(reduce({ 'a': 1, 'b': 2, 'c': 1 }, (result, value, key) => {(result[value] || (result[value] = [])).push(key); return result}, {})).toEqual({ '1': ['a', 'c'], '2': ['b'] });
  });

// Negative testing

// No negative testing is done as the module specifications do not specify how
// invalid inputs or other invalid values should be handled
// Before unit testing for invalid values can be implemted
// Error behaviour of the system should be specified