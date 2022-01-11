
// looking at how charAt starts from zero
console.log("All around the world".charAt(0).toUpperCase());
console.log("All around the world".charAt(1).toUpperCase());
console.log("All around the world".charAt(2).toUpperCase());
console.log("All around the world".charAt(3).toUpperCase());
console.log("All around the world".charAt(4).toUpperCase());
console.log("All around the world".charAt(5).toUpperCase());

// replacing word, watch out for quotation marks/
let curse = "blooming";
console.log("All around the world");
console.log(`All around the ${curse} world`);


const grade = 60;

switch (true) {
    case grade >= 70:
        console.log("Distinction");
        break;
    case grade >= 60:
        console.log("Merit");
        break;
    case grade >= 50:
        console.log("Pass");
        break;
    default:
        console.log("Failed");
}

if (grade < 50) {
    console.log("Failed");
} else if (grade >= 70) {
    console.log("Distinction");
} else if (grade >= 60) {
    console.log("Merit");
} else if (grade >= 50) {
    console.log("Pass");
}