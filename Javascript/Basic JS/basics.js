//INBUILT FEATURES
//console alert prompt

//CONSOLE
//console.log
// line below is used to print anything in the console window
console.log("Hey this is console log which is used to print");
let lastName = 48;
console.log(lastName);

//console.warn
console.warn("This is a warning");

//console.error
console.error("This is an error");

//ALERT
alert("This is an alert");

//PROMPT
//prompt jo hai so alert ka bhai hai joki alert se ek kadam aage hai
prompt("This is a prompt");

//*************************************************************

//VARIABLES & CONSTANTS
// har programming language me data se deal krna hota hai, wo alag alag prakkar ka data ho skta hai, ab aisa data jis se humein deal karna hai, wo save toh krna prega na,to wo data save krne ke liye humein koi saving space chahiye jaha par data save ho jaye and ye save krne ke liye unhe kuch naam bhi dena parega and isliye humein variables and constants banane padte hai taaki sara data save ho jaye and unka koi naam bhi ho taaki hum baad me unhe access kar paye

var discount = 10;
var discount = 99; //this will give an error as we can't redeclare same variable in same scope
discount = 22; //we can update the value stored inside variable

//For new browsers use modern way of declaring variable by 'let'
let p = 40;
let q = 50;

const z = 25;
z = 38; //we can't update the value of constant so doing this will give an error

// variables and constants hote hai data store karne ke liye and variables mein data store hota hai and change bhi ho jata hain but constants me data store hota hai only change nhi hota AND dono hi browser par memory lete hai and browser RAM par chalta hain toh technically dono RAM par chalte hai ya fir space lete hai

//*************************************************************

// COMPILERS and INTERPRETERS

// js language english words use krti hai and computers english nahi samajhte, wo smajhte hai 0 and 1 jisko current flow and current bypass bhi keh skte hai,and we want ki hum english me likh ke compiler se baat krle ,uske liye hum ek translator lagayenge joki hmara code english mein lega and use 0 and 1 mein convert krega

//compiler and interpreter translators hai joki english code ko convert kr rahe hai machine code mein, js me interpreter hota hai
// java & C uses compiler whereas javascript uses interpreter

//JIT Compiler - interpreter ki shuruatti taakat use krta hai and compiler ki running taaakat use krta hai

//*************************************************************

//Window ;- there are many features which are frequently used in js and they are not the part of js, they are not the part of js the language but they are available in the browser, and when you use them in js they are called from the browser and not js

//window ek bucket smjh lo jismein saaari wo cheejin available hai jo browseer deta hai js mein use krne ke liye kyoki wo sari chhezien js ka part nhi balki browser ka part hai which is available to use in js, all these features.We can also say tyhey are provided by browser to use in js, all these features which are made available via browser are put inside window
