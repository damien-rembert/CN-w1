
console.log("\n************\nDRINKING activity\n************")
// Create a variable called age.
let age = 36;
let country = "UK";
// Write an if statement that logs “Yes I can serve you” if age is
// greater than 17 and else logs “You aren’t old enough”.
// Take your if statement and add a variable
// called country.
// Now check if age > 17 and country == “UK”

if (age > 17 && country == "UK") {
    console.log("Yes I can serve you")
} else {
    console.log("You aren't old enough")
}

console.log("\n************\nPIZZA activity\n************")
// Create a variable for any pizza topping.
let topping = "vanilla";
// Create a switch statement, if the topping is one of
// your favourite ingredients, log to the console “These
// are important ingredients for my pizza.” If you don’t
// mind having sausage or onions for example, log to
// the console “I don’t mind having ${topping} on my
// pizza.” Finally, for any toppings you don’t like log
// ${topping} should not be on a pizza.”

let favOne = "These are important ingredients for my pizza.";
let mehOne = `I don’t mind having ${topping} on my pizza.`
let badOne = `${topping} should not be on a pizza.`

switch (topping) {
    case "sausage":
    case "cheese":
        console.log(favOne);
        break;
    case "coffee":
    case "vanilla":
        console.log(mehOne);
        break;
    case "egg":
    case "sausage":
        console.log(badOne);
        break;
    default:
        console.log("what's that?");
        break;
}


console.log("\n************\nPASSWORD activity\n************");
// Challenge 1(if/else):
// Create a variable called password.
let password = "testpass";
// Check how many letters are in the password, if there
// are less than 8 log to the console that the password
// is too short. Otherwise log the password to the
// console.
let passLength = password.length;
if (passLength < 8) {
    console.log("This is too short.");
} else {
    console.log(password);
}

console.log("\n************\nDIV BY 3 OR 5 activity\n************");
// Challenge 2(use both if/else and switch):
// Create a variable called num.
// Check if the variable is divisible by 3 or 5. If it is log
// “This number is divisible by 3 or 5” to the console.
// Otherwise log “This number is not divisible by 3 or 5”.
let num = 4554;
if (num % 3 === 0 || num % 5 === 0) {
    console.log("This number is divisible by 3 or 5");
} else {
    console.log("Not divisible by 3 or 5");
}

// switch


console.log("\n************\nDIV BY 3 OR 5 FIZZ BUZZ SWITCH activity\n************");

// Challenge 3:
// Create a variable called num.
// If num is divisible by 3 log “fizz” to the console, if it’s
// divisible by 5 log “buzz” to the console, if it’s divisible
// by both 3 and 5 log “fizz buzz” to the console.
// Otherwise log num to the console.
switch (true) {
    case (num % 3 == 0 && num % 5 == 0):
        console.log("fizz buzz");
        break;

    case (num % 5 == 0):
        console.log("buzz");
        break;

    case (num % 3 == 0):
        console.log("fizz");
        break;

    default:
        console.log(num)
        break;
}

console.log("\n************\nNUM PALINDROME activity\n************");
// Challenge 4:
// Create a variable called num.
// Check if the number is a palindrome (looks the same
// forward as it does backwards e.g. 1001 or 20202).

num = 20;
let numString = num.toString();
let numLength = numString.length - 1;
let palindrome = true;
let firstNum = 0;
let lastNum = 0;


for (let i = 0; i < (numLength / 2); i++) {
    firstNum = numString.charAt(i);
    lastNum = numString.charAt(numLength - i)

    if (firstNum != lastNum) {
        palindrome = false;
    }
}
if (palindrome) {
    console.log(`${numString} is a palindrome`);
} else {
    console.log(`${numString} is not a palindrome`);
}





console.log("\n************\nTIME AND SPACE activity\n************");
// Challenge 5:
// Create a variable called time, a variable called
// placeOfWork and a variable called townOfHome.
// Create an if statement that logs to the console
// where someone is at times of the day. E.g. if the time
// is 7 I’m at home, at 8 I’m commuting, at 9 I’m at work.
let time = 8;
let placeOfWork = "Manc"
let townOfHome = "Liverpool"

if (time >= 8 && time < 9){
    console.log("I'm commuting");
} else if (time > 9){
    console.log(`I'm in ${placeOfWork}`);
} else {
    console.log(`I'm in ${townOfHome}`);
}



console.log("\n************\nSTRING INDEX activity\n************");
// Challenge 6:
// Take the string
// “jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi”.
// Find the index of a last vowel in the string.

let letters = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi";
// let letters = "a";
// loop over the string from the end incrementing charAt
// find first occurence
console.log("number of letters in string):")
console.log(letters.length)
let found = false;
for (let i = letters.length; i >= 0; i--) {
    // const element = array[i];
    if (found) {
        break;
    }
    switch (letters.charAt(i - 1)) {
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
        case "y":
            console.log("vowel found at index " + i);
            found = true;
            break;
    }
    
    
}



console.log("\n************\nFIRST LETTER EQUAL LAST ONE activity\n************");
// Challenge 7:
// Create a variable called word that takes a string.
// Create an if statement that checks if the last letter is
// the same as the first. If it is return true, otherwise
// return false.
let word = "cantastic"
let firstLetter = word.charAt(0);
let lastLetter = word.charAt(word.length - 1);
console.log(`first and last letters of ${word} are the same:`)
console.log(firstLetter == lastLetter);


console.log("\n************\nSUM EVEN activity\n************");
// Challenge 8:
// Create two variables called num1 and num2.
// Create an if statement that checks if the result of the
// sum is even. If it is return the number, otherwise return
// the numbers multiplied together.
let num1 = 4544;
let num2 = 2;
console.log(`this is the sum ${num1 + num2}`)
if (((num1 + num2) % 2) == 0) {
    console.log(num1 + num2);
} else {
    console.log(num1 * num2);
}
