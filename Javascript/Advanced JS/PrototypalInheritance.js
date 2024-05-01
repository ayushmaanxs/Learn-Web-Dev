// hum objects create karte hai and kisi ek parent constructor function ke prototype mein kuch add kar dete hai and jab bhi kuch add hota hai toh wo parent se banne waale sabhi children instances ko wo properties jo parent ko prototype mein di gayi thi wo milti hai saugaat mein

// CONSTRUCTOR FUNCTION :- ek function jo ki this ka upyog kar raha ho and new ke dwara naye naye objects bana kar deta ho aise function ko constructor function kehte hai

// Example of contructor function
function abcd() {}
new abcd();
// bas new likha hona chahiye 'this' ka use nhi bhi kara gaya ho function me toh bhi use contructor function bol skte hai so is case me hmare bas bas ek blank object create hua hai

function makeHuman() {
  this.name = "Ayushmaan";
  this.age = 18;
}

let ans = new makeHuman();

/*
new ne ek blank object create kar diya or jab makeHuman() function call hua toh jaha jaha this aa rha tha waha blank object matlab tha uska i.e., 

{}.name="Ayushmaan"
blank object ke andar name me Ayushmaan add karo , agar blank object me name nhi hoga toh create kar diya jayega

{}.age=18;
blank object ke andar age me 18 add karo , agar blank object me age nhi hoga toh create kar diya jayega

{}.property_name = property_value;

jab bhi hum blank object me dot lagate hai toh hum us blank object ke andar pauch jate hai

aisa koi bhi function jismein hum this ka upyog kar rahe hai or us function ko call karte waqt hum new ka upyog kar rahe hain , toh new ka matlab waha par ek blank object ho jata hai

function makeHuman(name, age) {
    this.name = name;
    this.age = age;
}
  
const human1 = new makeHuman("Ayushmaan", 25);

jo bhi yaha pass krenge wo name or age me pass ho jayega
*/

function madeHuman(name, age) {
  this.name = name; //if we give value of name here directly then humanBoy and humanGirl dono me same hi value store ho jayega 
  this.age = age;
}

// prototype mein hum chijen add kr sakte hai or us se ban ne wale sabhi child usko access kar payenge jobhi humne prototype me diya hoga

// madeHuman.prototype.kuchbhiname = 12;

madeHuman.prototype.printMyName = function(){
    console.log(this.name);
}

const humanBoy = new madeHuman("Ayushmaan", 19);
const humanGirl = new madeHuman("Khushi", 18);
