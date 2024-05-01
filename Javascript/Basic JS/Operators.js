// Arithematic Operator

let z = 5 * 2;
let b = 2 ** 10; // 2 raise to the power 10 -->  ** is the exponential operator
let c = 5 - 16;
let d = 97 % 31;
let e = 16 + 69;
let f = 96 / 12;
console.log(z, b, c, d, e, f);

// Increment Decrement Operator
let x = 10;
console.log(x); // 10
console.log(++x); // 11
console.log(x++); // 11 then x = 12
console.log(x); // 12
console.log(--x); // 11
console.log(x--); // 11 then x = 10
console.log(x); // 10

// Assignment Operator
let a = 5;
a = a + 5;
a *= 5;

//comparison operator --> prints true or false
// ==  loose equality (only values need to be same)
// === strict equality (value and data must be same)

console.log(2 == 3);
console.log(2 === 3);
console.log(2 != 3);
console.log(87 >= 96);

//Ternary Operator
// condition ? true : false;
let age = 27;
let status = age >= 18 ? "yes vote" : "no vote";
console.log(status);

//Logical Operator
// AND - && --> All conditions must be true
// OR - ||  --> at least one condition should be true
// NOT - !  --> converts true to false and false to true
