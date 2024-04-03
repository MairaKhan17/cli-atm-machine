#!/usr/bin/env node
import inquirer from "inquirer";

let myBalance = 10000; //Dollar
let myPin = 1122;

let pinAnswer = await inquirer.prompt([
  {
    name: "pin",
    message: "enter your pin",
    type: "number",
  },
]);
if (pinAnswer.pin === myPin) {
  console.log("correct pin number");
  console.log("current account balance is: " + myBalance);

  let operationAns = await inquirer.prompt([
    {
      name: "operation",
      message: "please select options",
      type: "list",
      choices: ["withdraw", "check balance"],
    },
  ]);

  console.log(operationAns);

  if (operationAns.operation === "withdraw") {
    let amountAns = await inquirer.prompt([
      {
        name: "amount",
        message: "Enter your amount to withdaraw",
        type: "number",
      },
    ]);
    // homework 
    if (amountAns.amount > myBalance) {
      console.log("insufficient balance");
    } else {
      myBalance -= amountAns.amount;
      console.log("withdraw successfully " + amountAns.amount);
      console.log("your remaining balance is: " + myBalance);
    }
  } else if (operationAns.operation === "checkBalance") {
    console.log("your balance is: " + myBalance);
  }
} else {
  console.log("Incorrect pin number");
}
