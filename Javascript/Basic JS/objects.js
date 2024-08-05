/* 
Objects

What ?
objects ek tareeka hai jis se ki hum ek identity ki details ko ek sath rakh skte hai
kai logo ka data = array
ek bande ka kai sarra data = object
array --> []
object --> {}

var obj = {}; //This is a blank object

How to access ?
use object_name.property

to save a lot of details altogether at one place we use object

*/

var obj = {
  name: "Ayushmaan",
  age: 18,
  email: "kucch@sabkuch.com",
  contact: 9908766753,
};

var battery = {
  company: "canon",
  price: 1900,
  for: "camera",
  isWorking: "true",
};

battery.for; // dot means we have gone inside object
// console.log(battery.for);
// console.log(obj.email);-
// console.log(battery.isWorking);
// console.log(obj);
// console.log(battery);

// Creating an object
let a = {}; //a is a blank object

const rectangle = {
  length: 1,
  breadth: 2,
  // a function that is created inside an object is known as a method
  draw: function () {
    console.log("Lets Draw");
  },
};

// To access these
/*
rectangle
rectangle.length
rectangle.breadth
rectangle.draw()
*/

//Methods to create Objects

//1. FACTORY FUNCTION
//Camelcase --> numberOfStudents  --> the first letter of first word will always be small
//It is a rule to write the name of a factory function in camelcase that's why we have kept the first letter of createRectangle as small
function createRectangle(len, bre) {
  let rectangle = {
    length: len,
    breadth: bre,
    draw() {
      console.log("Drawing Rectangle");
    }
  };
  return rectangle;
}
let rectangleObj1 = createRectangle(6, 10);
let rectangleObj2 = createRectangle(26, 24);
let rectangleObj3 = createRectangle(21, 4);
let rectangleObj4 = createRectangle(3, 2);

//2. CONSTRUCTOR FUNCTIONS -> properties/methods -> intialise/Define
//constructor function -> Pascal Notation -> first letter of every word is Capital -> NumberOfStudents
//It is a rule to write the name of a constructor function in Pascal notation that's why we have kept the first letter of Triangle as Capital
function Triangle(b,h){   
  this.base=b,
  this.height=h,
  this.area=function(){
    console.log("The area is %d",b*h/2);
  }
}
let triangleObject = new Triangle(4,5);


// synchronous code goes directly to the main stack and asynchronous code waits on the side stack (all the calculations gets performed on the side stack but the code do not executed there) and when the position on synchronous code becomes vacant then it moves on main stack to give output
//even if asynchronous code ka answer aa gya ho side stack pe fir bhi jab tak main stack khali nhi hoga tab tak code chalega nhi
// code ka final output tabhi milta hai jab wo main stack pe aakr execute hota hai
