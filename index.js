// 1. 'number' + 3 + 3
// String + number joins together. 'number' + 3 makes 'number3', then adding 3 makes 'number33'.
console.log('number' + 3 + 3); // Result: 'number33'

// 2. null + 3
// In math, null becomes 0. So 0 + 3 equals 3.
console.log(null + 3); // Result: 3

// 3. 5 && "qwerty"
// && looks for the first false value. 5 is true and "qwerty" is true, so it returns the last one.
console.log(5 && "qwerty"); // Result: "qwerty"

// 4. +'40' + +'2' + "hillel"
// Unary plus converts strings to numbers 40 and 2. 
// 40 + 2 = 42. Then it joins with the string "hillel".
console.log(+'40' + +'2' + "hillel"); // Result: "42hillel"

// 5. '10' - 5 === 6
// Minus converts '10' to a number. 10 - 5 = 5. 
// 5 is not strictly equal to 6.
console.log('10' - 5 === 6); // Result: false

// 6. true + false
// In math, true is 1 and false is 0. 1 + 0 = 1.
console.log(true + false); // Result: 1

// 7. '4px' - 3
// Minus tries to make '4px' a number, but 'px' makes it NaN (Not a Number).
console.log('4px' - 3); // Result: NaN

// 8. '4' - 3
// Minus converts string '4' to number 4. 4 - 3 = 1.
console.log('4' - 3); // Result: 1

// 9. '6' + 3 ** 0
// 3 to the power of 0 is 1. Then string '6' joins with 1.
console.log('6' + 3 ** 0); // Result: '61'

// 10. 12 / '6'
// Division converts string '6' to number 6. 12 / 6 = 2.
console.log(12 / '6'); // Result: 2

// 11. '10' + (5 === 6)
// Inside brackets is false. String '10' joins with false.
console.log('10' + (5 === 6)); // Result: '10false'

// 12. null == ''
// null is only equal to undefined, so it's not equal to an empty string.
console.log(null == ''); // Result: false

// 13. 3 ** (9 / 3)
// 9 / 3 = 3. Then 3 to the power of 3 is 27 (3*3*3).
console.log(3 ** (9 / 3)); // Result: 27

// 14. !!'false' == !!'true'
// Both are non-empty strings, so they are both true. true == true is true.
console.log(!!'false' == !!'true'); // Result: true

// 15. 0 || '0' && 1
// && goes first. '0' string is true, 1 is true, so it returns 1. 
// Then 0 || 1 returns the first true value, which is 1.
console.log(0 || '0' && 1); // Result: 1

// 16. (+null == false) < 1
// +null is 0. 0 == false is true. true is converted to 1. 1 < 1 is false.
console.log((+null == false) < 1); // Result: false

// 17. false && true || true
// && finds the first false. Then false || true returns true.
console.log(false && true || true); // Result: true

// 18. false && (false || true)
// Brackets first: false || true is true. Then false && true is false.
console.log(false && (false || true)); // Result: false

// 19. (+null == false) < 1 ** 5
// 1 to the power of 5 is 1. +null is 0. 
// 0 == false is true (which is 1). 1 < 1 is false.
console.log((+null == false) < 1 ** 5); // Result: false