#! /usr/bin/env node
import inquirer from "inquirer";
console.log("Number Guessing Game!");
console.log("You have 3 attempts to guess the correct number between 1 and 10.");
async function guessTheNum() {
    const randNum = Math.floor(Math.random() * 10) + 1;
    let allowedAttempts = 3;
    while (allowedAttempts > 0) {
        const getUserInput = await inquirer.prompt({
            message: "Please enter first number",
            type: "number",
            name: "userGuessedNum",
        });
        if (getUserInput.userGuessedNum < 1 || getUserInput.userGuessedNum > 10) {
            console.log("Please enter a valid number between 1 and 10.");
        }
        else if (getUserInput.userGuessedNum == randNum) {
            console.log("Congratulations! You guessed the correct number.");
            break;
        }
        else {
            allowedAttempts--;
            console.log(`Wrong guess! try again`);
        }
        if (allowedAttempts == 0) {
            console.log(`Sorry, game over better luck next time. The correct number was ${randNum}.`);
        }
    }
}
guessTheNum();
