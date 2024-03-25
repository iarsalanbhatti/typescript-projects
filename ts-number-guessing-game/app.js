#! /usr/bin/env node
import inquirer from "inquirer";
const randNum = Math.floor(Math.random() * 10) + 1;
let allowedAttempts = 3;
console.log(randNum);
console.log("Number Guessing Game!");
console.log("You have 3 attempts to guess the correct number between 1 and 10.");
async function guessTheNum() {
    while (allowedAttempts > 0) {
        const getUserInput = await inquirer.prompt({ message: "Please enter first number", type: "number", name: "userGuessedNum" });
        if (getUserInput.userGuessedNum < 1 || getUserInput.userGuessedNum > 10) {
            console.log("Please enter a valid number between 1 and 10.");
        }
        else if (getUserInput.userGuessedNum == randNum) {
            console.log("Congrats! You guessed the correct number.");
            break;
        }
        else {
            allowedAttempts--;
            console.log(`Wrong guess! You have ${allowedAttempts} attempts left.`);
        }
        if (allowedAttempts == 0) {
            console.log(`Sorry, you've run out of attempts. The correct number was ${randNum}.`);
        }
    }
}
guessTheNum();
