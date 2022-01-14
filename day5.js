
function nameBox(title) {
    console.log(`\n************\n${title.toUpperCase()} activity\n************`);
}




let myMoney = 1000;
let yourMoney = 10;
let dAndP = [[coffee, 1], [tea, 5], [coke, 2]];
// let drinks = [[coffee, 1], [tea, 5], [coke, 2]];
// let price = [[coffee, 1], [tea, 5], [coke, 2]];

let printDrinks = () => {
    for (let i = 0; i < dAndP.length; i++) {
        const drinkName = dAndP[i][0];
        const drinkPrice = dAndP[i][1];
        console.log(`${drinkName} costs ${drinkPrice}`);
    }
}

let checkPrice = (myDrink) => {
    for (let i = 0; i < dAndP.length; i++) {
        if (dAndP[i][0] === myDrink) {
            return dAndP[i][1];
        }        
    }
    return -1;
}

let checkBalance = (price, wallet) => {
    if (wallet >= price) {
        return true;
    } else {
        return false;
    }

}

let buyDrink = (order) => {
    let myPrice = checkPrice(coke);
    if (myPrice > 0) {
        if (checkBalance(myMoney)) {
            myMoney -= myPrice;
            console.log(`Enjoy you ${order}, you have ${myMoney}`);
        }
    } else {
        console.log("we don't have that drink");
    }
}

buyDrink(coke, myMoney);