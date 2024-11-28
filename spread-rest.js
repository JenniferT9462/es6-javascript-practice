// Spread and Rest Operators Exercise

// Instructions:
// In this exercise, you will practice using the spread and rest operators in JavaScript. The spread operator (...) allows you to expand elements of an array or object, while the rest operator collects multiple elements into a single array.
// Complete the examples and exercises below using spread and rest operators where applicable.

// Examples

// Example 1: Use the spread operator to copy an array
// const originalArray = [1, 2, 3];
const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];
console.log(copiedArray); // Output: [1, 2, 3]

// Example 2: Use the spread operator to combine two arrays
// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = [...array1, ...array2];
console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]

// Example 3: Use the rest operator to collect arguments in a function
// function sum(...numbers) {
//     return numbers.reduce((total, num) => total + num, 0);
// }
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4)); // Output: 10

// Exercises

// 1. Use the spread operator to create a new array that includes all elements from the fruits array plus two additional fruits
const fruits = ["apple", "banana", "cherry"];
// // Your code here
const newFruits = [...fruits, "orange", "raspberry"];
console.log(newFruits);

// 2. Write a function that uses the rest operator to accept any number of strings and returns them concatenated together
function concatenateStrings(...strings) {
    // Your code here
    return strings.join('');
}
console.log(concatenateStrings('Hello', ' ', 'World', '!'));
console.log(concatenateStrings('I', ' ', 'love', ' ', 'ice', ' ', 'cream', '!'));
// 3. Use the spread operator to create a new object that includes all properties from the person object plus an additional property 'country'
const person = { name: "John", age: 30 };
// // Your code here
const   withCountry = { ...person, country: 'USA'};
console.log(withCountry);
// 4. Write a function that uses the rest operator to calculate the product of any number of arguments
function multiply(...numbers) {
     // Your code here
     return numbers.reduce((product, num) => product * num, 1); //The initial value for the product is set to 1, which is the identity value for multiplication.
 }
console.log(multiply(2, 3, 4, 5));
console.log(multiply(3, 4, 6));
console.log(multiply(2, 3));
console.log(multiply());
// 5. Use the spread operator to pass elements of an array as arguments to a function
const numbers = [5, 10, 15];
function add(a, b, c) {
     return a + b + c;
 }
// // Your code here
const result = add(...numbers);
console.log(result);
// Solutions should be written directly below each TODO comment.