// Closures
// ek function jo return kare doosra function, or use kare parent function ka koi variable

function counter() {
  var count = 0;
  return function () {
    count++;
    console.log(count); //count can be accessed here also
  };
}
var fnc = counter();
fnc(); // 1
fnc(); // 2
fnc(); // 3

//in above example we can access count in another function which is present in return

//A Closure is created when a function is defined within another function (the parent function) and the inner function accessess variables from its outer scope.
//It allows the inner function to remember and access the variables of its parent function
function outerFunction(x) {
  // Inner function accessing the 'x' parameter of outerFunction
  function innerFunction(y) {
    return x + y; //inner function uses 'x' which is out of it's scope
  }
}

//innerFunction closes over the variables in ts lexical scope , retaining access to them even after the outerFunction has finished executing

//outerFunction khatm ho gaya tha but sidewise 'x' ko store kar liya gaya tha interpreater ke dwara that's why ham 'x' ko access kar paa rahe hai innerFunction me
function timer(){
    let a = 12;
    return setTimeout(function(){
        console.log(a);
    },2000)
}
timer();