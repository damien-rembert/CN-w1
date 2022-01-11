// Create 9 variables - space1, space 2...
// space 9
// Assign either the value of ‘x’, ‘o’, ‘ ‘ to
// each of the variables

let space1 = "x";
let space2 = "o";
let space3 = "x";
let space4 = "o";
let space5 = "x";
let space6 = "o";
let space7 = "x";
let space8 = "o";
let space9 = "x";

// Using template literals inject the
// variable data into your board
// Output this to the console

console.log("   |   |   ")
console.log(` ${space1} | ${space2} | ${space3} `)
console.log("   |   |   \n-----------\n   |   |   ")
console.log(` ${space4} | ${space5} | ${space6} `)
console.log("   |   |   \n-----------\n   |   |   ")
console.log(` ${space7} | ${space8} | ${space9} `)
console.log("   |   |   ")