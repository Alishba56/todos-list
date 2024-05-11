#!/usr/bin/env node
import inquirer from "inquirer";

let todos = [];
let condition = true;

while (condition) {
  let Questions = await inquirer.prompt([
    {
      name: "Firstquestion",
      type: "input",
      message: "what would you like to add in you todos?",
    },
    {
      name: "Secondquestion",
      type: "confirm",
      message: "would you like to add more in you todos?",
      default: "true",
    },
  ]);

  todos.push(Questions.Firstquestion);
  condition = Questions.Secondquestion;

  console.log(todos);
}
