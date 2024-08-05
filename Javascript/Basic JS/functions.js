
// functions in es5 and es6

// es5 - function statements, function expressions, anonymous function

// es6 - fat arrow function ---> it can be written in 3 ways 
// a.) Basic fat arrow
// b.) Fat arrow with one parameter
// c.) Fat arrow with implicit return

// js mein function normal programming languages jaise nahi hai , iska matlab hai, yaha par js mein functions banane ke liye type nhi batana pdta hai bas function keyword likhna prega or ussey koi bhi naam deke bana skte hai

// js me functions ko first class function ka darja diya gya hai, jiska matlab hai ,ki js mein functions ko value/variable ki tarah treat kiya jaa skta hai

// What is function?
// koi aisa code jo hame baar baar use krna ho , ya fir koi aisa code jisko turant naa chalana ho par kabhi chalana ho, usey function mein daal skte hain

// Why we need functions?
// to reuse code and to wrap the code which we want to run in future at some point of time

// How to use functions?
// function fn_name (parameters) {
//     //code to be executed
// }
// fn_name(arguments); //calling function

// Extras we should know
// parameters and arguments
// arguments are the values recieved by function when called
// parameters are listed inside parentheses() in the fn definition

function abcd() {
  console.log("Hello Everyone");
  console.log("This is");
  console.log("Ayushmaan");
  console.log("Shandilya");
  console.log("on the ground");
  console.log("Jai shree ram");
}
abcd();
abcd();

// function add(val) {
//   console.log(18 + val);
// }
// add(40);

//preparation for interview
//ES5
// named function declaration
// function hell(){
//     //function statement
// }

//unnamed function declaration whose name is not stored inside a variable
// var bell = function(){
//     //function expression
// }

//function without any name
// function(){
//     //anonymous function
// }

//ES6 - Fat arrow functions

//fat arrow --> concise way of writing a function
// var h = ()=>{
//     //basic fat arrow
// }

// var g = (ab)=>{
     //fat arrow with one parameter
// }

///fat arrow with implict return --> we can omit return keyword in case of single expression
// var ret = ()=>"Ayushmaan";


//return ka matlab hua , jaha par bhi return lagega uske aage jo bhi likhoge wo jayega jaha par function call hua tha,return functions ke andar hi lgta hai always
//aisa functiion jo kuch bhi return nhi karta wo bhi UNDEFINED return karta hai

function rtcheck() {
  return 69;
}
console.log(rtcheck());

var p = () => 12;
var q = p();
console.log(q);
console.log(p());
