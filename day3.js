console.log("\n************\nTIC TAC TOE CHECK FIRST ROW activity\n************");

let space1 = "x";
// let space2 = "o";
let space2 = "x";
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

if (space1 == space2 && space2 == space3 && space1 != 0) {
    console.log(`that's a win for the ${space1}`);
} else {
    console.log("no win");
}


console.log("\n************\nCLASS\n************");
// between parenthesis: arguments
// between curly brackets: code block
const pressGrindBeans = () => {
    console.log("Grinding for 20 seconds");
}

// execution as usual
pressGrindBeans();


console.log("\n************\nACCOUNT activity\n************");
let bank = [[504921, 10], [50449921, 2050], [504545921, 500]]


// Your account now holds 1550
let transaction1 = [500, 50449921];
// We don't have that account
let transaction2 = [500, 5645];
// Insufficient funds
let transaction3 = [5000, 50449921];
// Your account now holds 1545
let transaction4 = [5, 50449921];
// We don't have that account
let transaction5 = [500, 45];
// Your account now holds 1045
let transaction6 = [500, 50449921];
// Your account now holds 545
let transaction7 = [500, 50449921];



const cashWithdrawal = (transaction) => {
    // if ((transaction[1] != accStatus[0][0])) {
    //     console.log("We don't have that account");
    //     return false;
    let accNumIndex = findAccountIndex(transaction[1]);
    if (accNumIndex < 0) {
        console.log("We don't have that account");
        return false;
    } else if ((transaction[0] > bank[accNumIndex][1])) {
        console.log("Insufficient funds");
        return false;                
    } else {
        // accStatus[0][1] -= transaction[0];
        // console.log(`Your account holds ${accStatus[0][1]}`)
        bank[accNumIndex][1] -= transaction[0];
        console.log(`Your account now holds ${bank[accNumIndex][1]}`)
    }
}

// check if account requested by transaction exists in the bank array
// return its index
const findAccountIndex = (accNumber) => {
    // console.log("findAccount running");
    for (let i = 0; i < bank.length; i++) {
        // console.log(`checking account ${bank[i][0]}`)
        if (accNumber === bank[i][0]) {
            // console.log(`found value at ${i}`)
            return i;
        }     
    }
    return -1;

    // if (bank.includes(accNumber)) {
    //     console.log("account found");
    //     return bank.findIndex(accNumber);
    // } 
}

cashWithdrawal(transaction1);
cashWithdrawal(transaction2);
cashWithdrawal(transaction3);
cashWithdrawal(transaction4);
cashWithdrawal(transaction5);
cashWithdrawal(transaction6);
cashWithdrawal(transaction7);
// cashWithdrawal(300, accnumber);
// cashWithdrawal(30, 50449921);
// cashWithdrawal(30, 50449921);
// cashWithdrawal(200, 50447921);

console.log("\n************\nTIC TAC TOE CHECK WITH ARRAY NOT WORKING activity\n************");

let theGrid = [["x", "x", "x"], 
               ["o", " ", "o"], 
               ["x", " ", "o"]];

// console.log(theGrid[0][0]);
// console.log(theGrid[0][1]);
// console.log(theGrid[0][2]);

// if () {
//     console.log("You won!");
// }
function checkLineWin (lineNum) {
    console.log("is there a win?")
    if ((theGrid[lineNum][0] == theGrid[lineNum][1]) && 
        (theGrid[lineNum][1] == theGrid[lineNum][2]) && 
        (theGrid[lineNum][0] != 0)) {
            console.log("there's a win")
            return true;
    }
}

for (let i = 0; i < theGrid.length; i++) {
    // const element = array[i];
    console.log(i)
    if (checkLineWin(i)) {
        console.log("Win!");
        
    } else {
        console.log("No win")
    }
}


console.log("\n************\nTYPES OF DRINKS activity\n************");
// Create a function that takes two parameters
// for a coffee order (size, type of drink)
// Let’s take this in
const takeOrder = (size, drinkType) => {
console.log(`Order received: ${size} ${drinkType}`);
}
takeOrder("Tall","Latte");

function newFunction() {
    var greeting = "hello";
    console.log(greeting);
}

function coffeeOrder(size, drinkType) {
    console.log(`your drink is a ${size} ${drinkType}`)
}
coffeeOrder("smoll", "juice");

console.log("\n************\nARROW FUNCTION activity\n************");
// Take this code and turn it into arrow function syntax
function factorial (n) {
if ((n === 0) || (n === 1)) {
return 1;
} else {
return (n * factorial(n-1));
}
}
console.log(factorial(33));


const factArrow = (n) => {
    if ((n === 0) && (n === 1)) {
        return 1;
    } else {
        return (n * factorial(n - 1));
    }
}
console.log(factArrow(33));