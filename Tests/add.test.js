import add from "../src/add.js";

// Positive testing

test('Adding 0 and 0 should equal 0', () => {
  expect(add(0, 0)).toEqual(0);
});

test('Adding 0 and 1 should equal 1', () => {
  expect(add(0, 1)).toEqual(1);
});

test('Adding 1 and 0 should equal 1', () => {
  expect(add(1, 0)).toEqual(1);
})

test('Adding 0 and -1 should equal -1', () => {
  expect(add(0, -1)).toEqual(-1);
});

test('Adding -1 and 0 should equal 1-', () => {
  expect(add(-1, 0)).toEqual(-1);
})

test('Adding 2 and 3 should equal 5', () => {
  expect(add(2, 3)).toEqual(5);
});

test('Adding -2 and -3 should equal -5', () => {
  expect(add(2, 3)).toEqual(5);
});

test('Adding 10000 and 10000 should equal 20000', () => {
  expect(add(10000, 10000)).toEqual(20000);
});

test('Adding Number.MAX_VALUE and 0 should equal Number.MAX_VALUE', () => {
  expect(add(Number.MAX_VALUE, 0)).toEqual(Number.MAX_VALUE);
});

// Negative testing

test('Incorrect parameter 1 (String) returns TypeError', () => {
  expect(add("a", 1)).toThrowError(TypeError);
});

test('Incorrect parameter 2 (String) returns TypeError', () => {
  expect(add(1, "a")).toThrowError(TypeError);
});

test('Incorrect parameter 1 (Null) returns TypeError', () => {
  expect(add(null, 1)).toThrowError(TypeError);
});

test('Incorrect parameter 2 (Null) returns TypeError', () => {
  expect(add(1, null)).toThrowError(TypeError);
});

