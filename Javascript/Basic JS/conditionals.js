// conditionals = if else , else-if , ternary operator , switch case

// jab bhi apko program me ek decision lena ho, ki aage ka  execution kaisa ho waha par if else , else-if use hota hai

// if mein hamesa true ya false aata hai  if(true) ,if(false)

// truthy and falsy values :- har value ko true ya false banaya ja skta hai, ye depend karta hai ki wo value ka type kya hi agar wo value truty hai toh true banegi and falsy hai toh false

// null , undefined , NaN (not a number) , 0 , "" (blank string) , ''(blank singkle quote) , document.all , false  ----> these all are falsy values

// rest everything is true

var age = 18;
if (age >= 18) {
  console.log("You are eligible to vote");
} else {
  console.log("You are not eligible to vote");
}

//seriallly jo bhi condition 1st true hua uska output aayega baki sari niche ki conditions true ho jayengi alrady even if baad ke bhi conditions true hai

if (13 > 12) {
  console.log("Hello 1");
} else if (14 > 12) {
  console.log("Hello 2");
} else if (17 > 15) {
  console.log("Hello 3");
} else {
  console.log("Hello 4");
}

let num = 1;
switch (num) {
  case 1:
    console.log("A");
    break;
  case 2:
    console.log("B");
    break;
  case 3:
    console.log("C");
    break;
  default:
    console.log("D");
}
