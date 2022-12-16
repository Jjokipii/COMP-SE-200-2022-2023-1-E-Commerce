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

test('Ceil of 1 with rounding of 0 decimals should be 1', () => {
  expect(ceil(1)).toBe(1);
});

test('Ceil of 1 with rounding of 2 decimals should be 1', () => {
  expect(ceil(1, 2)).toBe(1);
});

test('Ceil of 1.1234e3 with rounding of 2 decimals should be 1123.5', () => {
  expect(ceil(1.12345e3 , 1)).toBe(1123.5);
});

// Negative testing

test('Null precission should return default value', () => {
  expect(ceil(601, null)).toBe(601);
});

// Negative testing done to the system is limited
// Before negative testing for invalid paramaters and limits can be implemented
// Moudule error behaviour should be specified
