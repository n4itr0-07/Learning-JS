function diceRoll() {
    let rand = Math.floor(Math.random() * 6 ) + 1;
    console.log(rand);
}

diceRoll();
diceRoll();
diceRoll();
diceRoll();
diceRoll();
diceRoll();

// Average Caculate

function calcAvg(a, b, c) {
    let avg = (a + b + c) / 3;
    console.log(avg);
}
calcAvg(10, 20, 30);