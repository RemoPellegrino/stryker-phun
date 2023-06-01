const { factorial } = require('../scripts/MyScript');


// Very bad
// test('Test 1', () => {
//     expect(true).toBe(true);
// }) 

// 100 % Coverage, but still bad tests
// test('Invalid', () => {
//     expect(() => {
//         factorial("a");
//     }).toThrow('Invalid argument. Non-negative integer expected.');
// });
// test('Factorial of 3 should be 6', () => {
//     expect(factorial(3)).toBe(6);
// });


// 100 % Coverage and very safe tests
test('Invalid (string)', () => {
    expect(() => {
        factorial("a");
      }).toThrow('Invalid argument. Non-negative integer expected.');
});  
test('Invalid (non-int, >= 0)', () => {
    expect(() => {
        factorial(0.1);
    }).toThrow('Invalid argument. Non-negative integer expected.');
});
test('Invalid (int, < 0', () => {
    expect(() => {
        factorial(-1);
    }).toThrow('Invalid argument. Non-negative integer expected.');
});
test('Invalid (non-int, < 0)', () => {
    expect(() => {
        factorial(-0.1);
    }).toThrow('Invalid argument. Non-negative integer expected.');
});
test('Factorial(0) is 1', () => {
    expect(factorial(1)).toBe(1);
  });
test('Result 1', () => {
    expect(factorial(0)).toBe(1);
});
test('Result 3', () => {
    expect(factorial(3)).toBe(6);
  });
