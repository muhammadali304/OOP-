#! /usr/bin/env node

import inquirer from "inquirer";

class Person {
    // Declare a field to represent personality
    private personality: string;

    // Constructor
    constructor() {
        this.personality = "Mystery";
    }

    public askQuestion(answer: number): void {
        if (answer === 1) {
            this.personality = "Extravert";
        } else if (answer === 2) {
            this.personality = "Introvert";
        } else {
            console.log("You are still a Mystery");
        }
    }

    // This method returns the value of the Personality
    public getPersonality(): string {
        return this.personality;
    }
}

class Program {
    public static async main(): Promise<void> {
        try {
            const input = await inquirer.prompt({
                type: 'input',
                name: 'answer',
                message: 'Type 1 if you like to talk to others and type 2 if you would rather keep to yourself:',
            });

            const myPerson = new Person();
            myPerson.askQuestion(parseInt(input.answer));
            console.log("You are: " + myPerson.getPersonality());

            const nameInput = await inquirer.prompt({
                type: 'input',
                name: 'name',
                message: 'What is your name:',
            });

            const myStudent = new Student();
            myStudent.name = nameInput.name;
            console.log("Your name is: " + myStudent.name + " and your personality is: " + myStudent.getPersonality());
        } catch {
            console.log("Please enter an integer value");
        }
    }
}

class Student extends Person {
    // private field (backing field) holds any data assigned to the Name property
    private _name: string;

    constructor() {
        super();
        this._name = "";
    }

    // This is the Name Property
    public set name(value: string) {
        // The value property of the set accessor is automatically created by the compiler 
        this._name = value;
    }

    public get name(): string {
        // use the get accessor to read data from the class
        return this._name;
    }
}

// Call the main function
Program.main();
