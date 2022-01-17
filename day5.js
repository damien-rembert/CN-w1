function nameBox(title) {
    console.log(`\n************\n${title.toUpperCase()} activity\n************`);
}
nameBox("vending machine");

let myMoney = 1000;
let yourMoney = 10;
let dAndP = [["coffee", 1], ["tea", 5], ["coke", 2]];
// let drinks = [[coffee, 1], [tea, 5], [coke, 2]];
// let price = [[coffee, 1], [tea, 5], [coke, 2]];

let printDrinks = () => {
    for (let i = 0; i < dAndP.length; i++) {
        const drinkName = dAndP[i][0];
        const drinkPrice = dAndP[i][1];
        console.log(`${drinkName} costs ${drinkPrice}`);
    }
}

printDrinks();

let checkPrice = (myDrink) => {
    for (let i = 0; i < dAndP.length; i++) {
        // console.log(`check price`);
        if (dAndP[i][0] === myDrink) {
            return dAndP[i][1];
        }        
    }
    return -1;
}

let checkBalance = (price, wallet) => {
    // console.log(`check balance`);
    if (wallet >= price) {
        return true;
    } else {
        return false;
    }
}

// let buyDrink = (order) => {
//     // console.log(`buy drink`);
//     let myPrice = checkPrice(order);
//     if (myPrice > 0) {
//         if (checkBalance(myPrice, myMoney)) {
//             myMoney -= myPrice;
//             console.log(`Enjoy you ${order}, you have ${myMoney} left`);
//         } else {
//             console.log("you don't have enough money");
//         }
//     } else {
//         console.log("we don't have that drink");
//     }
// }

let buyDrink = (order, wallet) => {
    // console.log(`buy drink`);
    let myPrice = checkPrice(order);
    if (myPrice > 0) {
        if (checkBalance(myPrice, wallet)) {
            wallet -= myPrice;
            console.log(`Enjoy you ${order}, you have ${wallet} left`);
        } else {
            console.log("you don't have enough money");
        }
    } else {
        console.log("we don't have that drink");
    }
    return wallet;
}

myMoney = buyDrink("coke", myMoney);
// myMoney = buyDrink("coke", myMoney);
// myMoney = buyDrink("coke", myMoney);
// myMoney = buyDrink("coke", myMoney);
// myMoney = buyDrink("coke", myMoney);
// yourMoney = buyDrink("tea", yourMoney);
// yourMoney = buyDrink("tea", yourMoney);
// yourMoney = buyDrink("tea", yourMoney);
// yourMoney = buyDrink("tea", yourMoney);
// yourMoney = buyDrink("tea", yourMoney);
// yourMoney = buyDrink("tea", yourMoney);
// yourMoney = buyDrink("tea", yourMoney);


nameBox("café");

const cafe = {
    name: "Whitesheep",
    seatingCapacity: 100,
    hasSpecialOffers: true,
    drinks: ["Cappuccino","Latte","Filter coffee","Tea","Hot chocolate"],
    breakfastOffer: "Free croissant with coffee",
    lunchOffer: "Free drink with surprisingly priced sandwich",
    noOffer: "Sorry no offer",
    openCafe(){
    if(this.hasSpecialOffers){
    return "Time for a special offer!";
    }
    },
    closeCafe(){
    return "We are closed, come back tomorrow!";
    }
    };


nameBox("people");
// Activity:
// Let’s create an object called person with a key called
// name and set the value to your name.
// Add another key called age.

// Activity:
// Let’s add a list of favourite songs to our person object
// and log them to the console.

// Activity:
// Let’s edit our person object to include...
// A function called sayHi and when it’s called, it should
// return “Hello, my name is ${this.name}”
// Refresher: Template Literal

let person1 = {
    name: "Jojo Potato",
    age: 35,
    favSongs: ["mr brightside", "dinosaur will die", "spice up your life"],
    sayHi(){
        return `Hi my name is ${this.name} and I'm ${this.age}`;
    }
}
console.log(person1.sayHi());

let person2 = {

    name: "Johnny Potat",
    age: 12,
    favSongs: ["mr brightside", "dinosaur will die", "spice up your life"],
    sayHi(){
        console.log(`Hi my name is ${this.name} and I'm ${this.age}`);
    }
}

person2.sayHi();


nameBox("alarm");
// Create a key called weekendAlarm, with a value saying “no alarm needed”,
// and a key called weekdayAlarm, with a value saying “get up at 7am”
// Create a variable called day and one called alarm
// If day is Saturday or Sunday, set alarm to weekendAlarm
// If the day is a weekday, set alarm to weekdayAlarm
let alarm = {
    week: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    we: "no alarm needed",
    wd: "get up at 7",
    current(currentDay) {
        for (let i = 0; i < this.week.length; i++) {
            if (currentDay == this.week[i] && i < 5) {
                return this.wd;
            } else if (currentDay == this.week[i]) {
                return this.we; 
            }
        }
        return "oh oh";
    }
}

let day = "Mon";
console.log(alarm.current(day));
day = "Tue";
console.log(alarm.current(day));
day = "Thu";
console.log(alarm.current(day));
day = "Fri";
console.log(alarm.current(day));
day = "Sun";
console.log(alarm.current(day));
day = "Sat";
console.log(alarm.current(day));
day = "Poop";
console.log(alarm.current(day));


nameBox("pet");
// Activity:
// Create an object called pet with key values of:
// name, typeOfPet, age, colour
// And methods called eat and drink. They should return
// a string saying [Your pet name] is eating/drinking.

let pet = {
    name: "The Beast",
    typeOfPet: "cow",
    age: 45,
    colour: "blue",
    eat() {
        return `${this.name} is eating`
    },
    drink() {
        return `${this.name} is drinking`
    }
}

console.log(pet.drink());


nameBox("coffee shop");
// Activity:
// Create an object called coffeeShop with key values of:
// branch, drinks with prices, food with prices
// And methods called drinksOrdered and foodOrdered.
// They should return a string saying [Your order] is ... with
// all items chosen with costs, and the total cost.

let coffee = {
    name: "coffee",
    price: 5
}

let tea = {
    name: "tea",
    price: 5
}

let champagne = {
    name: "champagne",
    price: 50
}

let pie = {
    name: "pie",
    price: 5
}

let cake = {
    name: "cake",
    price: 10
}

let caviar = {
    name: "caviar",
    price: 100
}


let coffeeShop = {
    branch: "Liverpool",
    drinks: [coffee, tea, champagne],
    food: [pie, cake, caviar],
    // tills: [0, 50, 200],
    foodOrdered(foodName) {
        for (let i = 0; i < this.food.length; i++) {
            if (this.food[i].name === foodName) {
                return `${this.food[i].name} ------- ${this.food[i].price}`
            }           
        }
        return `${foodName} not found`
        // return ``
    },
    drinksOrdered(foodName) {
        for (let i = 0; i < this.food.length; i++) {
            if (this.food[i].name === foodName) {
                return `${this.food[i].name} ------- ${this.food[i].price}`
            }           
        }
        return `${foodName} not found`
        // return ``
    },
    // foodOrdered()
}

console.log(coffeeShop.foodOrdered("caviar"));
console.log(coffeeShop.foodOrdered("pie"));
console.log(coffeeShop.drinksOrdered("champagne"));



