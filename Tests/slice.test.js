import slice from "../src/slice.js";

var array = [1, 2, 3, 4]

// Positive testing

test('Slicing 3-END from [1, 2, 3, 4] should output [3, 4]', () => {
  expect(array.slice(array, 2)).toEqual([3, 4]);
});

test('Slicing 2-3 from [1, 2, 3, 4] should output [2, 3]', () => {
    expect(array.slice(array, 1, 2)).toEqual([2, 3]);
  });

// Negative testing

test('Incorrect parameter 1 returns TypeError', () => {
    expect(array.slice(null, 2, 3)).toThrowError(TypeError);
  });
  
  test('Incorrect parameter 2 returns TypeError', () => {
    expect(array.slice(array, null, 3)).toThrowError(TypeError);
  });
  
  test('Incorrect parameter 1 returns TypeError', () => {
    expect(array.slice(array, 2, "a")).toThrowError(TypeError);
  });