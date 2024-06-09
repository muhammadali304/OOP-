#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
class Person {
    // Constructor
    constructor() {
        this.personality = "Mystery";
    }
    askQuestion(answer) {
        if (answer === 1) {
            this.personality = "Extravert";
        }
        else if (answer === 2) {
            this.personality = "Introvert";
        }
        else {
            console.log("You are still a Mystery");
        }
    }
    // This method returns the value of the Personality
    getPersonality() {
        return this.personality;
    }
}
class Program {
    static async main() {
        try {
            const input = await inquirer.prompt({
                type: 'input',
                name: 'answer',
                message: 'Type 1) If you like to talk to others or \n Type 2) If you would rather keep to yourself:',
            });
            console.log("\n");
            const myPerson = new Person();
            myPerson.askQuestion(parseInt(input.answer));
            console.log("You are: " + chalk.blueBright(myPerson.getPersonality()));
            console.log("\n");
            const nameInput = await inquirer.prompt({
                type: 'input',
                name: 'name',
                message: 'What is your name:',
            });
            const myStudent = new Student();
            myStudent.name = nameInput.name;
            console.log("Your name is: " + chalk.blueBright(myStudent.name) + " and your personality is: " + chalk.blueBright(myStudent.getPersonality()));
        }
        catch {
            console.log("Please enter an integer value");
        }
    }
}
class Student extends Person {
    constructor() {
        super();
        this._name = "";
    }
    // This is the Name Property
    set name(value) {
        // The value property of the set accessor is automatically created by the compiler 
        this._name = value;
    }
    get name() {
        // use the get accessor to read data from the class
        return this._name;
    }
}
// Call the main function
Program.main();
