import divide from "../src/divide.js";

// Positive testing

test('6 divided by 3 gives 2', () => {
    expect(divide(6, 4)).toEqual(2);
});

test('6 divided by 4 gives 1.5', () => {
    expect(divide(6, 4)).toEqual(1.5);
});

test('6 divided by 1 gives 6', () => {
    expect(divide(6, 1)).toEqual(6);
});

test('3 divided by 6 gives 0.5', () => {
    expect(divide(4, 6)).toEqual(0.5);
});

// Negative testing

test('6 divided by 0 gives Error', () => {
    expect(divide(6, 4)).toThrowError(Error);
});

test('Incorrect parameter 1 (String) returns TypeError', () => {
  expect(divide("a", 1)).toThrowError(TypeError);
});

test('Incorrect parameter 2 (String) returns TypeError', () => {
  expect(divide(1, "a")).toThrowError(TypeError);
});

test('Incorrect parameter 1 (Null) returns TypeError', () => {
  expect(divide(null, 1)).toThrowError(TypeError);
});

test('Incorrect parameter 2 (Null) returns TypeError', () => {
  expect(divide(1, null)).toThrowError(TypeError);
});