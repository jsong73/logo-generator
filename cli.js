const inquirer = require("inquirer");

class CLI {
    run() {
        return inquirer
            .prompt([
            {
                name: "test",
                type: "input",
                message: "Please enter logo text. (Must not be more than 5 characters.)",
                //validations
                validate: (text) =>
                text.length <= 5 ||
                "Text should not be more than 5 characters.",
            },
            {
                name: "textColor",
                type: "input",
                message: "Please enter a text color.",
            },
            {
                name: "shapeType",
                type: "list",
                message: "Please select a base shape for the logo.",
                choices: ["circle", "square", "triangle", "diamond", "octagon"],
            },
            {
                name: "shapeColor",
                type: "input",
                message: "Enter a shape color",
            },
        ])
        .then(({ text, textColor, shapeType, shapeColor }) => {
            let shape;
            switch (shapeType) {
                case "square" :
                shape = new Square();
                break; 

                case "triangle" : 
                shape = new Triangle();
                break;

                case "diamond" : 
                shape = new Diamond();
                break;
                
                case "octagon" : 
                shape = new Octagon();
                break;

                default:
                case "circle" : 
                shape = new Circle();
                break;
            }
            shape.setColor(shapeColor);

            const svg = new SVG
        })
    }
}