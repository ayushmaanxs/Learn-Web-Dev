/*
Undefined vs Not Defined vs Null

'Undefined' is a value --> ye value tab di jati hai jab variable ko koi value naa mili ho, iska matlab hai, ye ek garbage value ki tarah treat ki jaati hai, so ham ise default value bhi keh skte hai

var a;  // value of 'a' is 'undefined' here

'not defined' is an error --> koi particular element/identity ko use krna without it's declaration gives an error , and that error is 'not defined' error

console.log(c); // c is 'not defined' here so we will get a reference error here

'null' is also a value --> this is a value which resolve like not found , null is recieved when something is not found

*/

/*
Arrays :- jab bhi hame ek ya ek se jyda value ek sath rakhna ho
Array is a data structure jiske andar ham 1 ya 1 se jyda elements rakh skte hai

How array works ?
var arr = [];  ---> this is a blank array
var arr = [1,2,"3",function(){},[],4];

index is from 0 to n-1 where n is the size of array
to access any elements write arrayname followed by its index in square brackets

arr[2]
arr[4]
arr[5]

why we need arrays?
a lot of times the data is in the shape of more than one memebr , to contaion all data altogether we can save it in an array

*/

var users = ["Ayushmaan", "Khushi", "loves", "Bhagwanpur", "Blockchain"]; //this is an array named "users"
console.log(users[0]); //0th index will get printed i.e., 1st member of array will get printed
console.log(users[2]);
console.log(users[1]);
console.log(users[5]); // "undefiend" as ye aisa value hai jise hamne koi value nhi diya

// var arr = [1,2,"3",function(){},[],4];
//we can put anything inside array we can mix data types in array of javascript

var arr = [1, 12, 3, 14, 5];
//how to loop an array

arr.forEach(function (val) {
  console.log(val + 19);
  console.log("Hello");
  console.log(val);
  console.log("bye");
});
