// 1.

let age = 21;
console.log(typeof age); 

// 2.//

let price = "150";
let numprice = Number(price);
console.log(typeof numprice); 

// 3.//

let num1 = 10;
let num2 = 5;
console.log(num1 + num2); // 15
console.log(num1 - num2); // 5
console.log(num1 * num2); // 50
console.log(num1 / num2); // 2

// 5.//

let a = 10;
let b = "5";
let c = 2;
b = Number(b);
console.log(a + b + c); // 17

// 6.
let score;
console.log(score); 
console.log(typeof score); // undefined
score = 50;
console.log(score); 
console.log(typeof score); // number

// 7.

var a = 10;
var a = 20;
console.log(a); // 20 (var can be redeclared and reassigned)

let b = 20;
// let b = 30; // SyntaxError: Identifier 'b' has already been declared
// console.log(b); // error - let cannot be redeclared

const c = 30;
// const c = 40; // SyntaxError: Identifier 'c' has already been declared
// console.log(c); // error - const cannot be redeclared or reassigned

// 8//

let base = 10;
let height = "5";
height = Number(height);
let area = 0.5 * base * height;
console.log(area); // 25

// 9//

let marks = "85";
marks = Number(marks);
console.log(marks + 15); // 100

// 10//

let message = "Hello, World!";
message = 42;
console.log(message); // 42
console.log(typeof message); // number


//11//
let text = "123abc";
text = Number(text);
console.log(text); // NaN
console.log(typeof text); // number
