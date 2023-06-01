// mathUtils.js
function factorial(n) {
    if (/*typeof n !== 'number' || */!Number.isInteger(n) || n < 0) {
      throw new Error('Invalid argument. Non-negative integer expected.');
    }

  
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
  
    return result;
  }
  
  module.exports = {
    factorial
  };
  