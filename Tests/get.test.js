import get from "../src/get.js";

const object = { 'a': [{ 'b': { 'c': 3 } }] }

// Positive testing

test('Getting a[0].b.c from object should return 3', () => {
  expect(get(object, 'a[0].b.c')).toEqual(3);
});

test('Getting [a, 0, b, c] from object should return 3', () => {
  expect(get(object, ['a', '0', 'b', 'c'])).toEqual(3);
});


// Negative testing

test("Null object returns undefined", () => {
  expect(get(null, 'a[0].b.c')).toEqual(undefined);
});

test('Getting a.b.c, default from object should return default', () => {
  expect(get(object, 'a.b.c', 'default')).toEqual('default');
})

// Negative testing done to the module is limited
// Before negative testing for invalid paramaters and limits can be implemented
// Moudule error behaviour should be specified
