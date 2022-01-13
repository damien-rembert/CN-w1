function nameBox(title) {
    console.log(`\n************\n${title.toUpperCase()} activity\n************`);
}

// Activity(1):
// Create a list of your favourite website (3 of them), and
// then add another two once you’ve created the list.
// Then remove the last website.

let bestSites = ["www.whatever.com", "www.google.co.uk", "www.internet.fr"];
console.log(bestSites);
bestSites[3] = "www.zoomba.tk";
console.log(bestSites);

nameBox("push");
// add to the end of the list
bestSites.push("www.imgur.com");
console.log(bestSites);

nameBox("pop");
// remove one item from the end of the list
bestSites.pop();
console.log(bestSites);

bestSites.push("www.imgur.com");
console.log(bestSites);
// Activity(2):
// Research on the following methods: map(), shift(),
// unshift(), slice(), splice() (and many more). Create a
// program to demonstrate the uses of each method,
// some of these you may need more than one example.
// (Pay attention: not all methods would permanently
// update/make changes to the arrays themselves.)
// For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array



// log the difference between current and previous length
let bSLengthA = bestSites.length;
let bSLengthB = bestSites.length;
let bSCurrent;
let lastUpdated = "A";
function trackArrayLength(trackedArray) {
    bSCurrent = bestSites.length;
    // if last updated A
    // 
}

nameBox("array.map()");
// creates a new array populated 
// with the results of calling a provided function on every element in the calling array. 
console.log(bestSites.map(s => s.toUpperCase()));
console.log(bestSites);

nameBox("array.shift()");
// removes first element of array and returns it
let elementBackUp = bestSites.shift();
console.log("current length: " + bestSites.length);
console.log(bestSites);

nameBox("array.unshift()");
// adds one or more elements to the beginning of an array and returns the new length of the array. 
console.log("current length: " + bestSites.unshift(elementBackUp));
console.log(bestSites);

nameBox("array.slice()");
//  returns a shallow copy of a portion of an array into a new array object 
// selected from start to end (end not included) 
// where start and end represent the index of items in that array. 
// The original array will not be modified. 
let firstTwo = bestSites.slice(0, 2);
console.log(firstTwo);
console.log(bestSites);


nameBox("array.splice()");
// changes the contents of an array by removing or replacing existing elements 
// and/or adding new elements in place. 
// To access part of an array without modifying it, see slice()
let spliceFirstTwo = bestSites.splice(0, 2);
if (firstTwo[0] == spliceFirstTwo[0] && firstTwo[1] == spliceFirstTwo[1]) {
    console.log("all is well");
} else {
    console.log("splice problem");
}
console.log(spliceFirstTwo);
console.log(bestSites);


nameBox("array.concat()");
//concat()
// used to merge two or more arrays. This method does not change the existing arrays, 
// but instead returns a new array. 
console.log(bestSites.concat(spliceFirstTwo));
console.log(bestSites);
bestSites = bestSites.concat(spliceFirstTwo);

nameBox("array.flat()");
//flat()
// Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
let bidimensionalArray = [bestSites, spliceFirstTwo, firstTwo];
console.log(bidimensionalArray);
console.log(bidimensionalArray.flat());

nameBox("array.indexOf()");
// .indexOf()
// Returns the first (least) index of an element within the array equal to an element,
//  or -1 if none is found.
console.log(bestSites.indexOf("www.google.com"));
console.log(bestSites.indexOf("www.google.co.uk"));

nameBox(".findIndex()");
// returns the index of the first element in the array 
// that satisfies the provided testing function. 
// Otherwise, it returns -1, 
// indicating that no element passed the test.

// const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
// const regex = /[A-Z]/g;
// const found = paragraph.match(regex);
// console.log(found);
// expected output: Array ["T", "I"]

function findAllIndexesRegEx() {

    
}
console.log(findAllIndexesRegEx("www"));

nameBox(".includes()");
// The includes() determines whether an array includes a certain value among its entries, 
// returning true or false as appropriate. 


nameBox(".find()");
// Returns the found element in the array, 
// if some element in the array satisfies the testing function, 
// or undefined if not found.

const exampleArr = [1 , 2 , 3];
exampleArr[3] = 4;
exampleArr[0] = 4;

console.log(exampleArr);