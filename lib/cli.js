const inquirer = require("inquirer");
const SVG = require("./svg");
const { Circle, Triangle, Square } = require("./shapes");
const { writeFile } = require("fs/promises");

class CLI {
    run() {
        return inquirer
            .prompt([
            {
                name: "text",
                type: "input",
                message: "Please enter logo text. (Must not be more than 3 characters.)",
                //validations
                validate: (text) =>
                text.length <= 3 ||
                "Text should not be more than 3 characters.",
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
                choices: ["circle", "square", "triangle"],
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

                default:
                case "circle" : 
                shape = new Circle();
                break;
        }
        shape.setColor(shapeColor);

        const svg = new SVG();
        svg.setText(text, textColor);
        svg.setShape(shape);
        return writeFile("logo.svg", svg.render());
        })
        .then(() => {
            console.log("Generating logo.svg");
        })
        .catch((error) => {
            console.log(error);
            console.log("Oops! Something went wrong.");
        });
      }
    }
    
    module.exports = CLI;
    