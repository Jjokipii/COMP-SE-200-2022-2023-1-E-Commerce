import reduce from "../src/reduce.js";

// Positive testing

test('Reducing [1, 2] with (sum, n) => sum + n outputs 3', () => {
  expect(reduce([1, 2], (sum, n) => sum + n, 0)).toEqual(3);
});

test('Reducing { a: 1, b: 2, c: 1 } with (result, value, key) => {(result[value] || (result[value] = [])).push(key); return result}, {}) outputs { 1: [a, c], 2: [b] }', () => {
    expect(reduce({ 'a': 1, 'b': 2, 'c': 1 }, (result, value, key) => {(result[value] || (result[value] = [])).push(key); return result}, {})).toEqual({ '1': ['a', 'c'], '2': ['b'] });
  });

// Negative testing

test('Incorrect parameter 1 returns TypeError', () => {
    expect(reduce(null, (sum, n) => sum + n, 0)).toThrowError(TypeError);
  });
  
  test('Incorrect parameter 2 returns TypeError', () => {
    expect(reduce([1, 2], null, 0)).toThrowError(TypeError);
  });
  
  test('Incorrect parameter 3 returns TypeError', () => {
    expect(reduce([1, 2], (sum, n) => sum + n, null)).toThrowError(TypeError);
  });