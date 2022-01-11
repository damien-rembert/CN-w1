let personName = "Jojo";
let hello = "Hello";

console.log("hello " + personName);
console.log(hello.length);
personName = personName.toUpperCase();
console.log(personName);
console.log(personName.toLowerCase());

// .random() will provide a number between 0 to 1 not inclusive
console.log(Math.random());

let sampleRandom = Math.random(); 
console.log(sampleRandom);
console.log(
    Math.ceil(sampleRandom)
    );

// .floor() rounds up and .ceil() rounds down
console.log(
    Math.floor(sampleRandom)
    );
console.log(
    Math.ceil(Math.random() * 6)
    );
console.log(
    Math.floor(Math.random() * 6)
    );

