import isLength from "../src/isLength.js";

// Positive testing

test('Test if number is of lenght', () => {
    expect(isLength(3)).toEqual(true);
});
  
test('Test if number.min is of lenght', () => {
    expect(isLength(Number.MIN_VALUE)).toEqual(false);
});

test('Test if number.inf is of lenght', () => {
    expect(isLength(Infinity)).toEqual(false);
});

test('Test if char is of lenght', () => {
    expect(isLength('3')).toEqual(false);
});

test('Test if string is of lenght', () => {
    expect(isLength("asdf")).toEqual(false);
});