import slice from "../src/slice.js";

// Positive testing

test('Slicing 3-END from [1, 2, 3, 4] should output [3, 4]', () => {
  var array = [1, 2, 3, 4];
  expect(slice(array, 2)).toEqual([3, 4]);
});

test('Slicing 2-3 from [1, 2, 3, 4] should output [3]', () => {
  var array = [1, 2, 3, 4];
  expect(slice(array, 2, 3)).toEqual([3]);
});

test('Slicing -2 - END from [1, 2, 3, 4] should output [3, 4]', () => {
  var array = [1, 2, 3, 4];
  expect(slice(array, -2)).toEqual([3, 4]);
});

test('Slicing -2 - 1 from [1, 2, 3, 4] should output [3]', () => {
  var array = [1, 2, 3, 4];
  expect(slice(array, -2, -1)).toEqual([3]);
});

// Negative testing

test('Slicing from null should output []', () => {
  var array = [1, 2, 3, 4];
  expect(slice(null, 2)).toEqual([]);
});

test('Slicing from null to 2 should output [1, 2]', () => {
  var array = [1, 2, 3, 4];
  expect(slice(array, null, 2)).toEqual([1, 2]);
});

test('Slicing from 2 to undefined should output [3, 4]', () => {
  var array = [1, 2, 3, 4];
  expect(slice(array, 2, undefined)).toEqual([3, 4]);
});

test('Slicing from -5 to 2 should output [1, 2]', () => {
  var array = [1, 2, 3, 4];
  expect(slice(array, -5, 2)).toEqual([1, 2]);
});

test('Slicing from 3 to 1 should output []', () => {
  var array = [1, 2, 3, 4];
  expect(slice(array, 3, 1)).toEqual([]);
});