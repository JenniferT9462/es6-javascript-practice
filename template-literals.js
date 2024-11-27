// Template Literals Exercise

// Instructions: 
// In this exercise, you will practice using template literals in JavaScript. Template literals allow you to embed variables and expressions in strings, as well as create multi-line strings easily. 
// Complete the examples and exercises below using template literals where applicable.

// Examples

// Example 1: Use template literals to create a greeting message
// const name = "John";
// const greeting = "Hello, " + name + "! How are you today?";
const name = "John";
const greeting = `Hello, ${name}! How are you today?`;
console.log(greeting);

// Example 2: Create a multi-line string using template literals
// const description = "This is line one.\n" +
//                     "This is line two.";
const description = `This is line one.
This is line two.`;
console.log(description);

// Example 3: Embed an expression in a template literal
// const a = 5;
// const b = 10;
// const result = "The sum of a and b is: " + (a + b);
const a = 5;
const b = 10;
const result = `The sum of a and b is: ${a + b}`;
console.log(result);

// Exercises

// 1. Use template literals to create a greeting message that includes a person's name and age
const name2 = "Alice";
const age = 30;
// // Your code here
const greeting2 = `Happy Birthday ${name2}! You are ${age} years old!`;
console.log(greeting2);
// 2. Create a multi-line string that describes your favorite book, including its title and author
const title = "The Catcher in the Rye";
const author = "J.D. Salinger";
// // Your code here
console.log(`My favorite book is ${title}, \nBy: ${author}`)
// 3. Write a template literal that embeds an expression to calculate the area of a rectangle
const length = 10;
const width = 5;
// // Your code here
console.log(`The area of a rectangle with a width of ${width} and length of ${length} is ${length*width}`)
// 4. Use template literals to create a string that includes a person's first name, last name, and their full name
const firstName = "Emma";
const lastName = "Brown";
// // Your code here
console.log(`First Name: ${firstName}, Last Name: ${lastName}, Full Name: ${firstName + ' ' + lastName}`)
// 5. Write a template literal that uses a conditional expression to output a message based on a score
const score = 85;
// // Your code here
const message = `You ${score >= 85 ? 'passed' : 'failed'} the exam.`
console.log(message)