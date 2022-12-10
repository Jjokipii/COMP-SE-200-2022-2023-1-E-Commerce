import ceil from "../src/ceil.js";

// Positive testing

test('Ceil of 1.23456 with rounding of 0 decimals should be 2', () => {
  expect(ceil(1.23456, 0)).toBe(2);
});

test('Ceil of 6.004 with rounding of 2 decimals should be 6.01', () => {
  expect(ceil(6.004, 2)).toBe(6.01);
});

test('Ceil of 4,006 with rounding of null decimals should be 5', () => {
  expect(ceil(4.006)).toBe(5);
});

test('Ceil of 6040 with rounding of -2 decimals should be 6100', () => {
  expect(ceil(6040, -2)).toBe(6100);
});

test('Ceil of 1.23456 with rounding of 0 decimals should be 2', () => {
  expect(ceil(1)).toBe(1);
});

// Negative testing

test('Incorrect parameter 1 (String) returns TypeError', () => {
  expect(ceil("a", 1.111)).toThrowError(TypeError);
});

test('Incorrect parameter 2 (String) returns TypeError', () => {
  expect(ceil(1.111, "a")).toThrowError(TypeError);
});

test('Incorrect parameter 1 (Null) returns TypeError', () => {
  expect(ceil(null, 1.111)).toThrowError(TypeError);
});

test('Incorrect parameter 2 (Null) returns TypeError', () => {
  expect(ceil(1.111, null)).toThrowError(TypeError);
});
