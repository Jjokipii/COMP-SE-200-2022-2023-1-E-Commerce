import isObject from "../src/isObject.js";

// Positive testing

test('Object should be of type Object', () => {
  expect(isObject({})).toEqual(true);
});

test('Vector should not be of type Object', () => {
    expect(isObject([1, 2, 3])).toEqual(true);
  });

  test('Function should not be of type Object', () => {
    expect(isObject(Function)).toEqual(true);
  });

  test('Null should not be of type Object', () => {
    expect(isObject(null)).toEqual(false);
  });

  test('String should not be of type Object', () => {
    expect(isObject("asdf")).toEqual(false);
  });

  test('Number should not be of type Object', () => {
    expect(isObject(1)).toEqual(false);
  });