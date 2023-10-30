/*
Stavros Panagiotopoulos (stavrospana)
SCS Boot Camp Module 10 Weekly Challenge - SVG Logo Maker
Created 10/12/2023
Last Edited 10/29/2023
*/

//retrieving packages
const inquirer = require("inquirer");
const fs = require("fs");
const {Triangle, Square, Circle} = require('./lib/shapes.js');



//array of questions to get data needed to generate logo.svg

const questions = [
{
  type: "input",
  message: "Enter logo text (max. 3 characters)",
  name: "text",
},
{
  type: "input",
  message: "Enter logo text colour (name or hex code)",
  name: "textColour",
},
{
  type: "list",
  message: "Choose logo shape",
  name: "shape",
  choices: ["Circle", "Triangle", "Square"],
},
{
  type: "input",
  message: "Enter shape colour (name or hex code)",
  name: "shapeColour",
}];

//function which attempts to write logo data to a .svg file


function writeSVGFile(svgData)
{
  //attempts to write logo data to .svg file logo.svg
  fs.writeFile("./logo.svg", svgData, function(err)
  {
    if (err) //if an error occurs, log it
    {
      console.log(`Error occurred while trying to create logo.svg; ${err}`); //logs error
    }
    else 
    {
      console.log(`Generated logo.svg`); //logs success
    }
  });
}

//function which processes the user's answers to the questions and generates a logo
function processSVGData(data)
{
  //checks if the user's text is longer than 3 characters; if so, throws an error
  if (data.text.length > 3)
  {
    throw new Error("Logo text must be three characters or less");
  }

  //defines a variable to hold the shape
  let shape;

  //checks which shape the user chose and creates a new instance of the appropriate class
  if (data.shape === "Triangle")
  {
    shape = new Triangle(data.text, data.textColour, data.shapeColour);
  }
  else if (data.shape === "Square")
  {
    shape = new Square(data.text, data.textColour, data.shapeColour);
  }
  else if (data.shape === "Circle")
  {
    shape = new Circle(data.text, data.textColour, data.shapeColour);
  }

  //renders the shape and stores it in a variable

  const svgStructure = shape.render();
  const svgData = `
  <svg width = "300" height = "200" xmlns = "http://www.w3.org/2000/svg">
    ${svgStructure}
  </svg>`;

  writeSVGFile(svgData);
}

//function which generates the SVG logo

function generateSVG()
{
  inquirer.prompt(questions)
  .then(function(data)
  {
    processSVGData(data);
  });
}

//calls generateSVG() to start the program

generateSVG();