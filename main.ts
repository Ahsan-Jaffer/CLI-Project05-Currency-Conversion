#! /usr/bin/env node
import inquirer from "inquirer";

// Conversion rates object
const conversion : any  =  {
    "PKR" : {
        "USD" : 0.0036,
        "BGP" : 0.0028,
        "PKR" : 1
    },

    "USD" : {
        "USD" : 1,
        "BGP" : 0.78,
        "PKR" : 278.50
    },

    "BGP" : {
        "USD" : 1.28,
        "BGP" : 1,
        "PKR" : 355.80
    }
}

async function getConversion() {
    // Prompting user for inputs
    const answer = await inquirer.prompt([
        {
            type : "list",
            message : "Select your currency : ",
            choices : ["PKR", "USD", "BGP"],
            name : "from"
        },
        {
            type : "list",
            message : "Select your conversion currency : ",
            choices : ["PKR", "USD", "BGP"],
            name : "to"
        },
        {
            type : "number",
            message : "Enter your conversion amount : ",
            name : "amount"
        }
    ]);

    // Destructuring the answers
    const { from, to, amount } = answer;

    // Checking for valid inputs
    if (from && to && amount) {
        // Calculating the converted amount
        const convertedAmount = amount * conversion[from][to];

        console.log(`${amount} ${from} =  ${convertedAmount} ${to}`);
    } else {
        console.log("Invalid Inputs");
    }
}

// Calling the function to get conversion
getConversion();
