// This is a comment
// This is another comment.

/*
What?
It looks like a CSS comment!
Yasss.
*/

// Variables! (Storing single pieces of info.)
// turkey_legs_consumed = 3
var turkeyLegsConsumed = 3;
// 1. Prefix your variables the first time you use them.
// 2. Use camelCase!
// 3. Terminate each line with `;`

// `var` was the original way to declare variables.
// `let` is better because:
// It gives you more control. (You can limit its use to a specific if/else or a specific loop.)
let turkeysCooked = 2;

// `const` is like `let`, but:
// - You must assign it when you declare it.
// - You can never reassign it.
const numberOfTurkeysICanEat = 1;

// How to use these keywords:
// 1. By default, create your variables using `const`
// 2. If you find out that you need to reassign it, change it to `let`.

// print("Hello World!")
console.log("Hello World!");

// print(turkeysCooked)
console.log(turkeysCooked);

// print(f"I ate {turkeyCooked} turkeys!')
console.log('I ate ${turkeysCooked} turkeys!');
// You have to use '' to run an f string function in js. 
// It's good practice to use '' through out even when it doesn't matter
// You can use backtick-strings for interpolation.
// - Template Strings
// - Templpate Literals

// print(f"How many turkeys  I should eat {numberOfTurkeysICanEat - turkeysCooked})
console.log('Turkeys to eat: ${numberOfTurkeysICanEat - turkeysCooked}');

const catName = 'Sally';