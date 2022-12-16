import divide from "../src/divide.js";

// Positive testing

test('6 divided by 3 gives 2', () => {
    expect(divide(6, 3)).toEqual(2);
});

test('6 divided by 4 gives 1.5', () => {
    expect(divide(6, 4)).toEqual(1.5);
});

test('6 divided by 1 gives 6', () => {
    expect(divide(6, 1)).toEqual(6);
});

test('3 divided by 6 gives 0.5', () => {
    expect(divide(3, 6)).toEqual(0.5);
});

// Negative testing

test('Undefined parameters should return default value 1', () => {
    expect(divide(undefined, undefined)).toEqual(1);
});

test('Undefined parameter one should return parmater two value', () => {
    expect(divide(undefined, 3)).toEqual(3);
});

test('Undefined parameter two should return parmater one value', () => {
    expect(divide(3, undefined)).toEqual(3);
});
  
  // Negative testing done to the module is limited
  // Before negative testing for invalid paramaters and limits can be implemented
  // Moudule error behaviour should be specified