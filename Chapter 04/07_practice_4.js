const favMoive = "avatar";

let guess = prompt("What is your favorite movie?");

while ((guess != favMoive) && (guess != "quit")) {
    guess = prompt("Wrong guess. Try again or type 'quit' to exit");
    
}

if ( guess == favMoive) {
    console.log("Congrats! You guessed it right.");
} else {
    console.log("You quit the game.");
}