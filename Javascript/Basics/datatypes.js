// types matlab data kaa roop
// harsh - string
// 12 - integer
// 12.3 - float
// 12.0 - float
// true - boolean
// a - character
// 567gfgdh890 - string

//Types = primitive data types || reference data types

// 12, 12.4 , harsh , true , a , null , undefined   ----> primitive dt

// [] () {} ---> reference dt --> all the brackets

//Primitive data types
var a = 12;
var b = a; //values are getting copied only not the address

//Reference data types

var arr = [1, 2, 3, 4, 5, 6];
var c = arr; //rather than values, address of arr is getting copied that's why any changes made in 'c' is also affecting 'arr'

c.pop(); // to remove the last element from arr (last element from both 'c' and 'arr' will be removed)

// spread
var brr = [1, 2, 3, 4, 5, 6];
var ba = [...brr]; // three dots means spread i.e., three dots ke bad jo bhi likha hai uske andar ka sara values copy kr do not the address

ba.pop(); // last element from 'ba' will be removed only.No change in the value of 'brr'
