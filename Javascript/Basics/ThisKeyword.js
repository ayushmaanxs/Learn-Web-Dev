// keywords ka matlab hota hai aisa word jiska koi matlab ho programming language me i.e., reserved words

// this call apply bind

// this ---> ye keyword javascrpt me one of the most suspenseful keyword hai
// this ki value baar baar badal skti hai alag alag conditions me
// value of 'this' in

// 1.Global Scope --> window
console.log(this);

// 2.Function --> window
function abcd() {
  console.log(this);
}
abcd();

//object ke andar function ho toh use method bolte hai
// 3.Method --> object
var obj = {
  name: function () {
    console.log(this);
  },
  age: 25,
  email: "abc@gmail.com",
};
obj.name(); //object ke anadr name ek method hai

// 4.Function inside method (es5 - function keyword wala function) --> window
//es5 wala function says to rebind the value of 'this' so 'this' ka value rebind ho jata hai window se
var obj2 = {
  sayName: function () {
    console.log(this); // sayName is a method and method ke andar 'this' ka value is an 'object'.This is an object here so only here we can access object properties. if we get into any another function here then we can't access object properties there
    console.log(this.age); // it is an object or object ke andar age hai so we are getting our output
    function childfnc() {
      console.log(this); //es5 function says to rebind the value of 'this' and since childfnc is a fuynction and function ke andar this ki value window hoti hai hence 'this' is now a window so we can't access the properties of object here
      console.log(this.age); // it will return undefined here as this has now become window and window ke andar koi age hai hi nhi
    }

    childfnc();
  },
  age: 18,
};
obj2.sayName();

// 5.Function inside method (es6 - fat arrow wala functon) --> object
//es6 wala arrow function says to take value of 'this' from parent
var obj3 = {
  tellName: function () {
    const child = () => {
      // arrow function takes the value of 'this' from its parent i.e.,child ka parent tellName hai or tellName ek method hai or method ke andar 'this' ka value object hota hai
      console.log(this); // hence it is an object
    };
    child();
  },
};
obj3.tellName();

var obj4 = {
  tellName2: () => {
    // arrow function takes the value of 'this' from its parent i.e., tellName2 ka parent --> obj4 hai which is in global scope so it will be WINDOW
    console.log(this); // window
  },
};
obj4.tellName2();

// 6.constructor function mein this ki value --> new blank object
//aisa function jisko 'new' se chalaya jata hai unhe constructor function kehte hai --> new ise --> blank object {} ko this me pass kar deta hai

function add() {
  console.log(this);
}
const ans = new add();

// 7.event listner me this ki value --> that element jispe listner laga ho
document.querySelector("button").addEventListener("click", function () {
  console.log(this);
});

// output : <button>Click Me</button>
