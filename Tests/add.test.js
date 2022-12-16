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

test('Undefined parameters should return default value 0', () => {
  expect(add(undefined, undefined)).toEqual(0);
});

test('Undefined parameter one should return parmater two value', () => {
  expect(add(undefined, 3)).toEqual(3);
});

test('Undefined parameter two should return parmater one value', () => {
  expect(add(3, undefined)).toEqual(3);
});

// Negative testing done to the module is limited
// Before negative testing for invalid paramaters and limits can be implemented
// Moudule error behaviour should be specified
