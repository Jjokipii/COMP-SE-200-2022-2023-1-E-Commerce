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

test('Incorrect parameter 1 (String) returns TypeError', () => {
    expect(get("a", 'a[0].b.c')).toThrowError(TypeError);
  });
  
  test('Incorrect parameter 2 (Number) returns TypeError', () => {
    expect(get(object, 1)).toThrowError(TypeError);
  });
  
  test('Incorrect parameter 1 (Null) returns TypeError', () => {
    expect(get(null, 'a[0].b.c')).toThrowError(TypeError);
  });
  
  test('Incorrect parameter 2 (Null) returns TypeError', () => {
    expect(get(object, null)).toThrowError(TypeError);
  });
  