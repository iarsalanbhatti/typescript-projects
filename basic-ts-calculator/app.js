#! /usr/bin/env node
import inquirer from 'inquirer';
const getUserInput = await inquirer.prompt([
    { message: "Please enter first number", type: "number", name: "userFirstNumber" },
    { message: "Please enter second number", type: "number", name: "userSecondNumber" },
    {
        message: "Please Select your desired operation to perform a simple calculation",
        type: "list",
        name: "arithmeticOperators",
        choices: ["+ Addition", "- Subtraction", "* Multiplication", "/ Division", "** Exponentiation", "% Modulus"]
    }
]);
function calc(inputFirstNumber, inputSecondNumber) {
    if (getUserInput.arithmeticOperators == "+ Addition") {
        const result = inputFirstNumber + inputSecondNumber;
        console.log("Here is your result");
        return `${inputFirstNumber} + ${inputSecondNumber} = ${result}`;
    }
    else if (getUserInput.arithmeticOperators == "- Subtraction") {
        const result = inputFirstNumber - inputSecondNumber;
        console.log("Here is your result");
        return `${inputFirstNumber} - ${inputSecondNumber} = ${result}`;
    }
    else if (getUserInput.arithmeticOperators == "* Multiplication") {
        const result = inputFirstNumber * inputSecondNumber;
        console.log("Here is your result");
        return `${inputFirstNumber} * ${inputSecondNumber} = ${result}`;
    }
    else if (getUserInput.arithmeticOperators == "/ Division") {
        const result = inputFirstNumber / inputSecondNumber;
        console.log("Here is your result");
        return `${inputFirstNumber} / ${inputSecondNumber} = ${result}`;
    }
    else if (getUserInput.arithmeticOperators == "** Exponentiation") {
        const result = inputFirstNumber ** inputSecondNumber;
        console.log("Here is your result");
        return `${inputFirstNumber} ** ${inputSecondNumber} = ${result}`;
    }
    else if (getUserInput.arithmeticOperators == "% Modulus") {
        const result = inputFirstNumber % inputSecondNumber;
        console.log("Here is your result");
        return `${inputFirstNumber} % ${inputSecondNumber} = ${result}`;
    }
}
let result = calc(getUserInput.userFirstNumber, getUserInput.userSecondNumber);
console.log(result);
