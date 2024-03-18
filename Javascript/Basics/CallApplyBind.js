// call apply blind
// ye teen tareeke hai function ko call karne ke liye kisi object ko this mankar

//  CALL 

const obj = {name: "Ayushmaan"}
function abcd(){
    console.log(this);
}
abcd();     //currently value is window
abcd.call();    //currently value is window
//call me this ki value jo bhi pass kar denge wahi 'this' ki value ban jayegi
abcd.call(obj); //object--> {name: 'Ayushmaan'}
abcd.call("Ayushmaan"); //String {'Ayushmaan'}
abcd.call(189); //Number {189}

function abcd2(x,y,z){
    console.log(this,x,y,z);
}
abcd2.call(obj,1,2,3); // phle 'this' ka value de then function ke parametres dale

//we can decide ki 'this' ki value ko kya rakhna hai funtion ko call krte waqt

//  APPLY

const obj2 = {country: "India"}
function count(a,b,c){
    console.log(this,a,b,c);
}
count.apply(obj2,[1,2,3]); //// phle 'this' ka value de then function ke parametres ko array bnakar pass karna hota hai

//BIND

//baad me chalane ke liye function 
const obj3 = {name: "Khushi"}
function shandilya(){
    console.log(this);
}
const BaadMeChalaneKeLiyeFunction = shandilya.bind(obj3);
BaadMeChalaneKeLiyeFunction();
