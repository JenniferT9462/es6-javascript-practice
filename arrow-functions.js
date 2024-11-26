// Arrow Functions Exercise

// Examples

// Example 1: Convert the following function to an arrow function
// function greet(name) {
//     return `Hello, ${name}!`;
// }
const greet = (name) => `Hello, ${name}!`;
console.log(greet('Alice'));

// Example 2: Write an arrow function that calculates the product of two numbers
// function multiply(a, b) {
//     return a * b;
// }
const multiply = (a, b) => a * b;
console.log(multiply(5, 3));

// Example 3: Create an arrow function that checks if a number is positive
// function isPositive(num) {
//     return num > 0;
// }
const isPositive = (num) => num > 0;
console.log(isPositive(10));
console.log(isPositive(-5));

// Exercises

// 1. Convert the following function to an arrow function
// function add(a, b) {
//     return a + b;
// }
const add = (a, b) => a + b;
console.log(add(23, 56));
// 2. Write an arrow function that takes an array of strings and returns an array of their lengths
// function getStringLengths(arr) {
//     // Your code here
// }
let arr = ["John", "Sarah", "Anna", "Shane"];
const getStringLengths = arr.map((string) => string.length);
console.log(getStringLengths);
// 3. Create an arrow function that takes two numbers and returns their difference
// function subtract(a, b) {
//     // Your code here
// }
const subtract = (a, b) => a - b;
console.log(subtract(45, 23));
// 4. Write an arrow function that takes a number and returns whether it is odd
// function isOdd(num) {
//     // Your code here
// }
const isOdd = (num) => num%2 !== 0;
console.log(isOdd(22)); //Output should be false
console.log(isOdd(13)); //Output should be true
// 5. Create an arrow function that takes an array of numbers and returns the largest number in the array
// function findMax(arr) {
//     // Your code here
// }
let numbers = [2, 5, 7, 9]
const findMax = (arr) => Math.max(...arr);
console.log(findMax(numbers)) //Output should be 9
// Solutions should be written directly below each TODO comment.
