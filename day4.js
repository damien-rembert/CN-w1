function nameBox(title) {
    console.log(`\n************\n${title.toUpperCase()} activity\n************`);
}

nameBox("array power");
// Activity(1):
// Create a list of your favourite website (3 of them), and
// then add another two once you’ve created the list.
// Then remove the last website.

let bestSites = ["www.whatever.com", "www.google.co.uk", "www.internet.fr"];
console.log(bestSites);
bestSites[3] = "www.zoomba.tk";
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
nameBox("array.indexOf()");
//indexOf()
nameBox("array.flat()");
//flat()
