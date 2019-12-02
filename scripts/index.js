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
console.log(`I ate ${turkeysCooked} turkeys!`);
// You have to use `` to run an f string function in js. 
// It's good practice to use `` through out even when it doesn't matter
// You can use backtick-strings for interpolation.
// - Template Strings
// - Templpate Literals

// print(f"How many turkeys  I should eat {numberOfTurkeysICanEat - turkeysCooked})
console.log(`Turkeys to eat: ${numberOfTurkeysICanEat - turkeysCooked}`);

const petName = `Sally`;
// petName.toUpperCase();
// When do I do upper-casing in
// HTML vs CSS vs JavaScript?
// - Where ever you have control.
// - If it won't change for a looong time: HTML
// - If you can't change the HTML: CSS
// - If you get the data from a server: JavaScript
console.log(`${petName.toUpperCase()} is ${petName.length} characters long.`);
// .toUpperCase is a method (i.e., a function that belongs to an object)
// .length is property (i.e., a variable that belongs to an object)

const aboutMyPet = `${petName.toUpperCase()} is ${petName.length} characters long.`;
console.log(aboutMyPet);

petName = "Toby";
console.log(aboutMyPet);

// Stuff we'll do with collections C.R.U.D.
// Create
const turkeyDinner = ["sausage balls", "turkey", "dressing", "pecan pie"]
// How do I copy a list?
// Retrieve
// print(turkeyDinner[2])
console.log(turkeyDinner[2]);
// How do I retrive a portion? ("slice" in python)
// How do I retrieve based on a condition?
// How do I transform each time and put that 

// Update
// turkeyDinner[1] = "Tofurkey"
turkeyDinner[1] = "Tofurkey";

// Delete
// In python:
// turkeyDinner.pop(1)
// del turkeyDinner[1]
// .......
// You can do this in JavaScript:
// delete turkeyDinner[1];
// But! This leaves a hole!
// Instead you can splice
turkeyDinner.splice(1, 1)

// in python, we do this:
// for item in turkeyDinner:
//      print(f"For turkey day, I ate {item}")
//
// In JavaScript:
// 1. "the classic" for-loop (is the equivalent of the python while-loopo)
// BTW the equivalent of count += 1 is count ++
for (let count = 0; count < turkeyDinner.length; count++) {
    // console.log(count);
    console.log(`I ate ${turkeyDinner[count]}`);
}

// 2. "new-fangled" for-loop
let itemCount  = 0; //if you REALLY need the index
for (let item of turkeyDinner) {
    console.log(`I ate ${item}`);
    itemCount ++;
}
// 3. (for tomorrow) .forEach and friends



// converting numbers to/from Strings
// a_num = "5"
// no_really_a_number = int(a_num)
const aNum = "5";
// const reallyANUMBER = Number(aNum);
const reallyANumber = parseInt(aNum, 10);

const reallyAFloat = parseFloat("3.14");

// the _original_string = str(no_really_a_number)
const theStringFive = String(reallyANumber);
const theString314 = String(reallyAFloat);

// Comparison

// In python, this is False:
// "5" == 5

// In JavaScript, the == operator AUTOMATICALLY converts types
// In JavaScript, use the "threequal"
"5" === 5
// '==' is the strict equality operator
// it does a double comparison.
// 1. it compares the types
// 2. then, it compares the values

// These are the samein python and in javascript
5 < 6 // true
6 < 6 // false
6 <= 6 // true

// The following is not a thing in JS:
// "7" >== 7....you get an error

// and/or equivalents
const petAge = 5;

// python
// petAge < 10 and petAge >2

// JavaScript
petAge < 10 && petAge > 2
// or = "||"
petAge < 10 || petAge > 2

// Too Much!
// petAge < 10 && petAge > 2 || petAge === 5
const isYoungEnough = petAge < 10;
const isOldEnough = petAge > 2;
const isJustRight = petAge === 5

// if/else
if (isYoungEnough && isOldEnough) {
    if (isJustRight) {
        console.log(`You are exactly the right age`);
    } else if(isMoreJustRight) {
    } else {
        console.log(`You're cool anyway.`)
    }
}

// 1. Create an array
// 2. loop through the array
// 3. Print out only the even numbers

// num = 8123456
// (num % 2) == 0
// JS:
// const num = 8123456;
// (num % 2) === 0;
