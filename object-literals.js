// Enhanced Object Literals Exercise

// Instructions:
// In this exercise, you will practice using Enhanced Object Literals in JavaScript. Enhanced Object Literals make it easier to define objects by allowing shorthand for properties, methods, and computed property names.
// Complete the examples and exercises below using Enhanced Object Literals where applicable.

// Examples

// Example 1: Create an object with property shorthand
const name = 'Pikachu';
const type = 'Electric';
// const pokemon = {
//     name: name,
//     type: type
// };
const pokemon = { name, type };
console.log("Example 1 - Pokemon:", pokemon); // Output: { name: 'Pikachu', type: 'Electric' }

// Example 2: Define a method inside an object without the function keyword
const trainer = {
    name: 'Ash',
    greet() {
        console.log(`Hi, I'm ${this.name}!`);
    }
};
trainer.greet(); // Output: Hi, I'm Ash!

// Example 3: Use a computed property name
const statName = 'speed';
const statValue = 100;
const stats = {
    [statName]: statValue
};
console.log("Example 3 - Stats:", stats); // Output: { speed: 100 }

// Exercises

// 1. Create an object that represents a car with properties 'brand' and 'model' using shorthand property names
const brand = 'Toyota';
const model = 'Corolla';
 // Your code here
const car = {brand, model};
console.log("Exercise 1:", car);
// 2. Define an object that has a method to calculate the sum of two numbers without using the function keyword
 const calculator = {
     // Your code here
     sum(a, b) {
        return a + b;
     }
 };
console.log("Exercise 2:", calculator.sum(2,2))
// 3. Create an object representing a book with a computed property name for its 'rating'
 const ratingKey = 'rating';
 const ratingValue = 4.5;
 // Your code here
const book = {
    [ratingKey]: ratingValue
}
console.log("Exercise 3 - Rating:", book);
// 4. Write an object that represents a student, including a method to introduce themselves
 const student = {
     name: 'Misty',
     // Your code here
     greeting() {
        console.log(`Hi, I'm ${this.name}`)
     }
 };
 student.greeting();
// 5. Create an object with shorthand properties and a computed property for the release year
 const title = 'Pokemon Red';
 const creator = 'Game Freak';
 const releaseYearKey = 'releaseYear';
 const releaseYearValue = 1996;
 // Your code here
const pokemonGame = { title, creator, [releaseYearKey]: releaseYearValue};
console.log("Exercise 5:", pokemonGame)
// Solutions should be written directly below each TODO comment.