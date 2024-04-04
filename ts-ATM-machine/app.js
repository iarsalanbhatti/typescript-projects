#! /usr/bin/env node
import inquirer from "inquirer";
let myPin = 1212;
let pinTries = 3;
let accountBalance = 50000;
const balancePkrFormat = accountBalance.toLocaleString("en-PK", {
    style: "currency",
    currency: "PKR",
});
async function checkAccountBalance() {
    console.log(`Your current account balance is Rs${accountBalance}`);
    nextTransaction();
}
async function withdraw() {
    const userInputWithdrwaAmount = await inquirer.prompt({
        name: "userWithdrawAmount",
        type: "number",
        message: "Please enter amount"
    });
    if (userInputWithdrwaAmount.userWithdrawAmount > accountBalance) {
        console.log("Insufficient funds!");
    }
    else if (userInputWithdrwaAmount.userWithdrawAmount % 500 > 0) {
        console.log("Please enter the amount in multiples of 500");
        withdraw();
    }
    else {
        accountBalance -= userInputWithdrwaAmount.userWithdrawAmount;
        console.log(`Withdrawal successful.`);
        nextTransaction();
    }
}
async function fastCash() {
    const userInputFastCash = await inquirer.prompt({
        name: "userFastCash",
        type: "list",
        message: "Please Select a Amount",
        choices: ["500", "1000", "2000", "3000", "5000", "10000"],
    });
    if (userInputFastCash.userFastCash > accountBalance) {
        console.log("Insufficient funds!");
    }
    else if (userInputFastCash.userFastCash === "500") {
        accountBalance -= userInputFastCash.userFastCash;
        console.log(`Withdrawal successful. Remaining balance: Rs${accountBalance}`);
    }
    else if (userInputFastCash.userFastCash === "1000") {
        accountBalance -= userInputFastCash.userFastCash;
        console.log(`Withdrawal successful. Remaining balance: Rs${accountBalance}`);
    }
    else if (userInputFastCash.userFastCash === "2000") {
        accountBalance -= userInputFastCash.userFastCash;
        console.log(`Withdrawal successful. Remaining balance: Rs${accountBalance}`);
    }
    else if (userInputFastCash.userFastCash === "3000") {
        accountBalance -= userInputFastCash.userFastCash;
        console.log(`Withdrawal successful. Remaining balance: Rs${accountBalance}`);
    }
    else if (userInputFastCash.userFastCash === "5000") {
        accountBalance -= userInputFastCash.userFastCash;
        console.log(`Withdrawal successful. Remaining balance: Rs${accountBalance}`);
    }
    else if (userInputFastCash.userFastCash === "10000") {
        accountBalance -= userInputFastCash.userFastCash;
        console.log(`Withdrawal successful. Remaining balance: Rs${accountBalance}`);
    }
    nextTransaction();
}
async function nextTransaction() {
    let userInputNextTransaction = await inquirer.prompt({
        name: "userTransactionOption",
        type: "list",
        message: "Would you like to another transaction?",
        choices: ["Yes", "No"],
    });
    if (userInputNextTransaction.userTransactionOption === "Yes") {
        let userInputTransactioType = await inquirer.prompt({
            name: "userTransactionType",
            type: "list",
            message: "Please Select a Transaction",
            choices: ["Balance Inquiry", "Cash Withdrawal", "Fast Cash"],
        });
        if (userInputTransactioType.userTransactionType === "Balance Inquiry") {
            checkAccountBalance();
        }
        else if (userInputTransactioType.userTransactionType === "Cash Withdrawal") {
            withdraw();
        }
        else if (userInputTransactioType.userTransactionType === "Fast Cash") {
            fastCash();
        }
    }
    else if (userInputNextTransaction.userTransactionOption === "No") {
        console.log("Thank you for using this ATM Machine");
    }
}
while (pinTries > 0) {
    const userInputPin = await inquirer.prompt({
        name: "userPin",
        type: "number",
        message: "Please enter your Personal Identification Number (PIN)"
    });
    if (userInputPin.userPin === myPin) {
        console.log("Welcome back");
        let userInputTransactioType = await inquirer.prompt({
            name: "userTransactionType",
            type: "list",
            message: "Please Select a Transaction",
            choices: ["Balance Inquiry", "Cash Withdrawal", "Fast Cash"],
        });
        if (userInputTransactioType.userTransactionType === "Balance Inquiry") {
            checkAccountBalance();
        }
        else if (userInputTransactioType.userTransactionType === "Cash Withdrawal") {
            withdraw();
        }
        else if (userInputTransactioType.userTransactionType === "Fast Cash") {
            fastCash();
        }
        break;
    }
    else {
        pinTries--;
        console.log("Wrong Pin!");
    }
    if (pinTries == 0) {
        console.log("Pin exhausted contact your bank");
    }
}
