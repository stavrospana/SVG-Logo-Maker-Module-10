/*
Stavros Panagiotopoulos (stavrospana)
SCS Boot Camp Module 10 Weekly Challenge - SVG Logo Maker
Created 10/12/2023
Last Edited 10/29/2023
*/

class Shape 

{
    // Define constructor method
    constructor(text, textColour, shapeColour) 
    {
        this.text = text;
        this.textColour = textColour;
        this.shapeColour = shapeColour;
       
    }
// Define method to create SVG element
render()
{
    return `<polygon points = "${this.points}" fill = "${this.shapeColour}"/>
    <text x = "150" y = "124" font-size = "72" font-weight = "bold" fill = "${this.textColour}" text-anchor = "middle" alignment-baseline = "middle">${this.text}</text>`
}

}
//defines a class for a square shape
class Square extends Shape
{
    constructor(text, textColour, shapeColour)
    {
        super(text, textColour, shapeColour);
        this.points = "55, 5 245, 5 245, 195 55, 195"; //defines polygon points to create a square
    }
}

//defines a class for a circle shape
class Circle extends Shape
{
  constructor(text, textColour, shapeColour)
  {
    super(text, textColour, shapeColour); 
    this.points = `cx = "150" cy = "100" r = "90"`; //defines x and y coordinates and radius to create a circle
  }

  //overrides default render() method to generate a circle 
  render()
  {
    return `<circle ${this.points} fill = "${this.shapeColour}"/>
    <text x = "150" y = "124" font-size = "72" font-weight = "bold" fill = "${this.textColour}" text-anchor = "middle" alignment-baseline = "middle">${this.text}</text>`
  }
}

class Triangle extends Shape
{
  constructor(text, textColour, shapeColour)
  {
    super(text, textColour, shapeColour); 
    this.points = "150, 18 244, 182 56, 182"; //defines polygon points to create a triangle
  }

  //overrides default render() 
  render()
  {
    return `<polygon points = "${this.points}" fill = "${this.shapeColour}"/>
    <text x = "150" y = "125" font-size = "40" font-weight = "bold" fill = "${this.textColour}" text-anchor = "middle" alignment-baseline = "middle">${this.text}</text>`
  }
}

module.exports = {Square, Circle, Triangle}; //exports classes to be used in other files