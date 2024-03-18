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

battery.for; // dot means we have gone isnide object
console.log(battery.for);
console.log(obj.email);
console.log(battery.isWorking);
console.log(obj);
console.log(battery);

// synchronous code goes directly to the main stack and asynchronous code waits on the side stack (all the calculations gets performed on the side stack but the code do not executed there) and when the position on synchronous code becomes vacant then it moves on main stack to give output
//even if asynchronous code ka answer aa gya ho side stack pe fir bhi jab tak main stack khali nhi hoga tab tak code chalega nhi
// code ka final output tabhi milta hai jab wo main stack pe aakr execute hota hai
