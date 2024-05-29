// setTimeout --> settimeout ka code kuch der baad chalta hai
// kuch second baad kisi function ko execute karna hai

console.log("hey 1");
console.log("hey 2");
setTimeout(function(){
    console.log("Hey 3");
},2000)
console.log("hey 4");

// setTimeout ek asynchronous code hai so ye sbse last me execute hoga jab pura main stack khali ho jayega


// setInterval --> set interval ka code kucch der baad chalta hai just like setTimeout but ye baar baar chalta hai ek particular time ke baad
var count = 1;
const humaraInterval = setInterval(function(){ 
    ++count;
    console.log(count);
    console.log("Hey");
    if(count === 4) clearInterval(humaraInterval);
},2000)

// set inerval ko jis variable me save kraa hai usko clear krne se ruk jayega setTimeout ka code

// har 2 sec pe 'hey 3' print hoga
