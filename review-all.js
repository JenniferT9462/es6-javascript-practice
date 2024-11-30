// ES6 Features Exercise
// TODO: Solve the following problems using ES6 features: Arrow Functions, Template Literals, Default Parameters, Destructuring, Promises, Enhanced Object Literals.

// 1. Arrow Functions: Convert the following function to an arrow function.
// function greet(name) {
//     return 'Hello ' + name;
// }
const greet1 = (name) => `Hello, ${name}!`
console.log('Exercise 1:', greet1('Jennifer'));

// 2. Template Literals: Replace string concatenation with template literals.
const name = "Alice";
const message = `Hello, ${name}! Welcome to ES6 exercises.`;
console.log("Exercise 2:", message);

// 3. Default Parameters: Add a default parameter value to avoid 'undefined' output.
 function introduce(name = "Jane", greeting = "How are you?") {
     return `${greeting}, ${name}!`;
 }
console.log("Exercise 3 - Default:", introduce());
console.log("Exercise 3 - w/Arguments:", introduce('Jennifer', 'What is happening?'));

// 4. Destructuring: Destructure the 'user' object to extract the 'name' and 'age'.
const user = { userName: "Charlie", age: 25, city: "New York" };
const { userName, age } = user;
console.log("Exercise 4 - Name:", userName);
console.log("Exercise 4 - Age:", age);

// 5. Arrow Functions: Write an arrow function that takes two numbers and returns their sum.
// function sum(a, b) {
//     // Your code here
// }
const sum = (a, b) => a + b;
console.log("Exercise 5:", sum(4,5));

// 6. Template Literals: Use template literals to create a multi-line string describing a book.
const title = "The Great Gatsby";
const author = "F. Scott Fitzgerald";
 // Your code here
console.log("Exercise 6:", `\nMy favorite book is ${title}. \nBy: ${author}`);

// 7. Default Parameters: Write a function that calculates the area of a rectangle with a default height of 10.
 function calculateArea(width, height = 10) {
     // Your code here
     return width * height;
 }
console.log("Exercise 7 - Default:", calculateArea(4));
console.log("Exercise 7 - w/Arguments:", calculateArea(4, 20));

// 8. Destructuring: Destructure an array to get the first and second elements.
const colors = ["red", "green", "blue", "yellow"];
 // Your code here
const [first, second] = colors;
console.log("Exercise 8 - First:", first);
console.log("Exercise 8 - Second:", second);

// 9. Promises: Create a promise that resolves with a success message after 2 seconds.
 const delayMessage = new Promise((resolve, reject) => {
     // Your code here
     setTimeout(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/charmander')
            .then((response) => response.json())
            .then((data) => {
                console.log("Exercise 9 Pokemon Name:", data.name);
                resolve('Promise complete!');
            })
            .catch((error) => {
                reject(`Error fetching data: ${error.message}`)
            })
     }, 2000)
 });
console.log("Exercise 9:", delayMessage);
// 10. Enhanced Object Literals: Use enhanced object literals to create an object with a method that logs a message.

const person = {
   // Your code here
   personName: "Dana",
   greeting() {
        return `Hello, ${this.personName}, How ya doing?`;
   }
};
console.log("Exercise 10:", person.greeting())

// 11. Arrow Functions & Default Parameters: Create an arrow function that returns a greeting. It should accept a name, and if no name is provided, it should default to 'Guest'.
const greet = (name = 'Guest') => {
    // Your code here
    return `Hello ${name}, Welcome to the JS Practice!`
}
console.log("Exercise 11 - Default:", greet());
console.log("Exercise 11 - w/Arguments:", greet("Jennifer"));

// 12. Destructuring & Template Literals: Destructure the following object and use template literals to create a message.
const car = { brand: "Toyota", model: "Corolla", year: 2020 };
// Your code here
const { brand, model, year} = car;
console.log("Exercise 12:", `Your ${brand} ${model} car was made in ${year}.`);

// Solutions should be written directly below each TODO comment.
