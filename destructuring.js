// Destructuring Exercise

// Instructions:
// In this exercise, you will practice using destructuring in JavaScript. Destructuring allows you to unpack values from arrays or properties from objects into distinct variables.
// Complete the examples and exercises below using destructuring where applicable.

// Examples

// Example 1: Destructure an array to get the first and second elements
// const colors = ["red", "green", "blue"];
const colors = ["red", "green", "blue"];
const [firstColor, secondColor] = colors;
console.log(firstColor); // Output: red
console.log(secondColor); // Output: green

// Example 2: Destructure an object to extract properties
// const user = { name: "Alice", age: 25 };
const user = { name: "Alice", age: 25 };
const { name, age } = user;
console.log(name); // Output: Alice
console.log(age); // Output: 25

// Example 3: Destructure with default values
// const settings = { theme: "dark" };
const settings = { theme: "dark" };
const { theme, language = "English" } = settings;
console.log(theme); // Output: dark
console.log(language); // Output: English

// Exercises

// 1. Destructure the following array to get the first, second, and third elements
// const fruits = ["apple", "banana", "cherry", "date"];
// // Your code here

// 2. Destructure the following object to extract the title and author properties
// const book = { title: "1984", author: "George Orwell", year: 1949 };
// // Your code here

// 3. Use destructuring to swap the values of two variables
// let a = 1;
// let b = 2;
// // Your code here

// 4. Destructure the following object to extract the name and city properties
// const person = { name: "John", city: "New York", zip: "10001" };
// // Your code here

// 5. Destructure an array and use the rest operator to collect the remaining elements
// const numbers = [10, 20, 30, 40, 50];
// // Your code here

// Solutions should be written directly below each TODO comment.
