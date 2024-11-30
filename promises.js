// Promises Exercise

// Instructions:
// In this exercise, you will practice using Promises in JavaScript. Promises are a way to handle asynchronous operations, making it easier to work with delayed code.
// Complete the examples and exercises below using Promises where applicable.

// Examples

// // Example 1: Use fetch to get data from the PokeAPI and handle the response with a promise
// fetch('https://pokeapi.co/api/v2/pokemon/ditto')
//     .then((response) => response.json())
//     .then((data) => console.log("Example 1 - Pokemon Data:", data))
//     .catch((error) => console.error("Example 1 - Error fetching data:", error));

// // Example 2: Create a promise that rejects with an error if the fetch fails
// fetch('https://pokeapi.co/api/v2/pokemon/unknown')
//     .then((response) => {
//         if (!response.ok) {
//             return Promise.reject("Example 2 - Pokemon not found!");
//         }
//         return response.json();
//     })
//     .then((data) => console.log("Example 2 - Pokemon Data:", data))
//     .catch((error) => console.error("Example 2 - Error:", error));

// // Example 3: Chain promises using .then() to fetch data from multiple endpoints of the PokeAPI
// fetch('https://pokeapi.co/api/v2/pokemon/charizard')
//     .then((response) => response.json())
//     .then((data) => {
//         console.log("Example 3 - Pokemon Name:", data.name);
//         return fetch(data.abilities[0].ability.url);
//     })
//     .then((response) => response.json())
//     .then((abilityData) => console.log("Example 3 - Ability Data:", abilityData))
//     .catch((error) => console.error("Example 3 - Error fetching data:", error));

// Exercises

// 1. Create a function that fetches data from the PokeAPI and resolves with "Data fetched successfully!" if the fetch is successful
 async function fetchData() {
     // Your code here
     fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
        .then((response) => response.json())
        .then((data) => {
            console.log('\nExercise 1:', data);
            resolve('Fetched data successfully!')
        })
        .catch((error) => console.error("Example 1 - Error fetching data:", error));

 }
fetchData()
 .then((message) => {
    console.log(message)
 })

// 2. Write a function that tries to fetch an unknown Pokemon from the PokeAPI and rejects with an error message "Fetch failed!" if it doesn't exist
async function fetchWithError() {
     // Your code here
     fetch ('https://pokeapi.co/api/v2/pokemon/unknown')
        .then((response) => {
            if(!response.ok) {
                return Promise.reject("Exercise 2 - Pokemon not found")
            }
            return response.json()
        })
        .then((data) => console.log("\nExercise 2 - Pokemon Data:", data))
        .catch((error) => console.error("Exercise 2 - Error:", error));
}
fetchWithError();
// 3. Fetch data from the PokeAPI, and then use the ID of the Pokemon to fetch another related resource
async function chainPromises() {
     // Your code here
    fetch('https://pokeapi.co/api/v2/pokemon/luxio')
        .then((response) => response.json())
        .then((data) => {
            console.log("\nExercise 3 - Pokemon Name:", data.name);
            return fetch(data.abilities[0].ability.url);
        })
        .then((response) => response.json())
        .then((abilityData) => console.log("\nExercise 3 - Ability Data:", abilityData))
        .catch((error) => console.error("Exercise 3 - Error fetching data:", error));
    
 }
chainPromises()
// 4. Fetch data from the PokeAPI after 1 second and use .then() to log "Promise complete!"
 const promiseComplete = new Promise((resolve) => {
     // Your code here
     setTimeout(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/charmander')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                resolve('Promise complete!');
            })
     }, 1000)
 });
promiseComplete.then((message) => {
    console.log(message);
})
// 5. Write a function that fetches a Pokemon from the PokeAPI and checks if the ID is even; resolves if it is, rejects if it is odd
async function checkEvenNumber(pokemonName) {
     // Your code here
     return new Promise((resolve, reject) => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
            .then((response) => response.json())
            .then((data) => {
                const pokemonId = data.id;
                console.log(pokemonId);
                if(pokemonId % 2 === 0) {
                    resolve(`The Pokémon ${pokemonName} has an even ID: ${pokemonId}.`)
                } else {
                    reject(`The Pokémon ${pokemonName} has an odd ID: ${pokemonId}.`)
                }
            })
            .catch((error) => {
                reject(`Error fetching data for ${pokemonName}: ${error.message}`)
            })
     })
 }
checkEvenNumber('pikachu')
 .then((message) => console.log(message))
 .catch((error) => console.error(error));
// Solutions should be written directly below each TODO comment.
