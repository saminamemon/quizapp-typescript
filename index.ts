#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";



const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 3000)
    })
}
async function welcome() {
    let rainbowTitle = chalkAnimation.pulse(" Welcome to Typescript quiz");
    await sleep();
    rainbowTitle.stop();
    console.log(chalk.red`
       
         
   `);


}

await welcome()
async function AskQuestion() {


    const answers = await inquirer.prompt([{
        type: "list",
        name: "questionno1",
        choices: ["console.log", "consoler.log"],
        message: " which one is type error in typescript",

    },
    {
        type: "list",
        name: "questionno2",
        choices: ["$", "&"],
        message: " which one is a sign of intersection in typescript",

    },
    {
        type: "list",
        name: "questionno3",
        choices: ["lamda", "let"],
        message: " which one is a function in typescript",
    }

    ])
    
    if (answers.questionno1 === "consoler.log") {
        console.log("Your answer is correct");
    }
    else {
        console.log("Answer is not correct");

    }
    if (answers.questionno2 === "&") {
        console.log("Answer is correct ");
    }
    else {
        console.log("Answer is not correct");

    }
    if (answers.questionno3=== "lamda") {
        console.log("Answer is correct");
    }
    else {
        console.log("Answer is not correct");

    }

}
AskQuestion()

