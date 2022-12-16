import get from "../src/get.js";

const object = { 'a': [{ 'b': { 'c': 3 } }] }

// Positive testing

test('Getting a[0].b.c from object should return 3', () => {
  expect(get(object, 'a[0].b.c')).toEqual(3);
});

test('Getting [a, 0, b, c] from object should return 3', () => {
    expect(get(object, ['a', '0', 'b', 'c'])).toEqual(3);
  });

test('Getting a.b.c, default from object should return default', () => {
    expect(get(object, 'a.b.c', 'default')).toEqual('default');
  })

// Negative testing

// No negative testing is done as the module specifications do not specify how
// invalid inputs or other invalid values should be handled
// Before unit testing for invalid values can be implemted
// Error behaviour of the system should be specified
  