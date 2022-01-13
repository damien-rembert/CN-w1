function nameBox(title) {
    console.log(`\n************\n${title.toUpperCase()} activity\n************`);
}


nameBox("simple loop");
for (let index = 0; index < 5; index++) {
    console.log(index);
}

nameBox("even array and loop");
// let evenArray;
let evenArray = [];

for (let i = 0; i < 20; i++) {
    if (i % 2 === 0) {
        evenArray.push(i);
        console.log(i);
    }
}
console.log(`even number: ${evenArray}`);
// console.log(`${evenArray}`)


nameBox("fav films");
// Activity(1):
// Create an array that lists your favourite films,
// up to 5 elements
// Add 2 more using a method
// Use a loop to cycle through the array
// for(let i = 0; ...){...}
let favFilms = ["film1", "film2", "film3", "film4"];
let extraFilm1 = "film5";
let extraFilm2 = "film6";

let addFilms = (eFilm0, eFilm1) => {
    favFilms.push(eFilm0);
    favFilms.unshift(eFilm1)
}

addFilms(extraFilm1, extraFilm2);

for (let i = 0; i < favFilms.length; i++) {
    console.log(favFilms[i]);
}


nameBox("random 6 num 1 to 50");
// Activity(2):
// Generate 6 random numbers between 1-50
for(let i = 0; i < 6; i++){
console.log(Math.ceil(Math.random() * 49));
}



nameBox("9 to 0 loop");
// Activity(3):
// If we can create a loop to put 0-9 on the
// screen, how can we count from 9 to 0?
let anArray = ["first", "hey", "hey", "hey", "hey", "hey", "hey", "hey", "hey"]
for(let i = anArray.length - 1 ; i >= 0; i--){
console.log(anArray[i]);
}



nameBox("display films from array");
// Activity(4):
// Displays 4 films stored in an array
// Use a for loop to show each film in the array
// Create a function called filmCheck() that checks if the
// 3rd film in the array is Ghostbusters.
// If it is, it should return “yey it’s ghostbusters”. If it isn’t, it
// should return “booo, we want ghostbusters”

for (let i = 0; i < 4; i++) {
    console.log(favFilms[i])
}

let fav4Films = favFilms.slice(0,3);
fav4Films[2] = "Ghostbusters";

const filmCheck = (filmList) => {
    if (filmList[2] === "Ghostbusters"){
    console.log("Yey it's Ghostbusters")
    } else {
        console.log("Boo, We want Ghostbusters")
    }
}

filmCheck(favFilms);
filmCheck(fav4Films);



nameBox("generate random number and check if divisible by 7");
// Activity(5):
// Create a variable, generate a random number
// between 1 and 30 six times, each random number
// generated, check if this number of divisible by 7 or not.
let myNum = 0;
let divisibleBy7 = (num) => {
    if (num % 7 === 0) {
        console.log(`${num} is divisible by 7`)
    } else {
        console.log(`${num} is not divisible by 7`)
    }
}

for (let i = 0; i < 6; i++) {
    myNum = Math.ceil(Math.random() * 29);
    console.log(`A wild number appears: ${myNum}`);
    divisibleBy7(myNum);    
}






nameBox("do...while loop");
// Activity(6):
// Research on do...while loop, find out about the difference
// between for loop, while loop and do...while loop. Give an
// example of each. What are the pros and cons?

let doingIt = false;
do {
    console.log(doingIt);
    if (doingIt) {
        doingIt = false;
    }
} while (doingIt);

nameBox("prime numbers");
// Activity(7):
// Create a program that check all numbers between 1
// and 20, whether it is a prime number or not.

let isPrimeArrow = (number) => {
    for (let i = 1; i <= number; i++) {

        if (number % i === 0 && i === number) {
            console.log(`${i} and ${number} are the same and no remainder`);
            return true;
        }
        if (number % i === 0) {
            console.log(`${i} is not a prime number`);
            return false;
        }
    }
    console.log(`${i} is a prime number`);
    return true;
}

for (let i = 1; i <= 20; i++) {
    // isPrime(i);   
    if (isPrimeArrow(i)) {
        console.log(`${i} is a prime number`);
    } else {
        // console.log(`${i} is not a prime number`);
    }

}


