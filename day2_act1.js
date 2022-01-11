/* Write code that stores your name, age, and favourite
colour
The stored data must be output to the console in a
complete sentence
Why not stretch: use different method’s to
manipulate your output
*/

let myName = "Damien";
let myAge = 36;
let myFavColour = "green";
let spaces36 = "                                    ";

console.log(
    `Hi, I'm ${myName}, I'm ${myAge} and I like ${myFavColour}`
    );

console.log(
    `Hi, I'm ${myName.toLowerCase()}, I'm ${spaces36.length} and I like ${myFavColour.toUpperCase()}`
    );
    