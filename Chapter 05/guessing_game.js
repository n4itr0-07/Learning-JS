 const max = prompt("Enter the maximum number: ");

 console.log(max);

 const random = Math.floor(Math.random() * max) + 1;

 let guess = prompt("Enter your guess: ");

 while(true) {
    if (guess == "quit") {
        console.log("You quit the game!");
        break;
    }

    if (guess == random) {
        console.log("Congratulations! You guessed the correct number.");
        break;
    } else if (guess < random) {
        guess = prompt("Too low! Enter your guess again: ");
    } else if (guess > random) {
        guess = prompt("Too high! Enter your guess again: ");
    }
    else {
        guess = prompt("Incorrect! Enter your guess again: ");
    }
 }