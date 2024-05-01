// Create a form with input fields and a submit button.Use Javascript to validate the form and display an error message if the input is invalid

// jab bhi forms ke sath deal kare toh yaad rkhe ki submit hone pe forms page ko reload kar dete hai, aur humein khayal rakhna hai ki pages reload naa ho , nahi to agar page reload hua toh JS nhi chalega kyuki J chal paye us se phle hi page reload ho jayega

// To prevent a form from submitting in js , we have to use the preventDefault()

var form = document.querySelector("form");
var inp1 = document.querySelector("#inp1");
var inp2 = document.querySelector("#inp2");
var h4 = document.querySelector("h4");
// jab hamara submit event ho toh submit event ko hame preventDefault karna hai
// ev me hum event recieve karenge ---> event kon sa ==> submit
// inp1.value :- input 1 ke andar jo likha hai
/*
form.addEventListener("submit", function (ev) {
  ev.preventDefault();
  if (inp1.value === "" || inp2.value === "") {
    h4.textContent = "Error , Some fields are blank";
    h4.style.color = "red";
  } else {
    h4.textContent = "";
    h4.style.color = "black";
  }
})
*/

// yaha 2 inputs the toh humne select kr liya but let us assume hmare paas boht sare inuts hote toh hum document.querySelectorAll() use karte
// jab hum querySelectorAll() karte hai toh hume NodeList milta hai
// NODELIST --> node list ek array jaisa structure hota hai jiske andar html elements place hote hai
// array me hum kuch bhi value rkh skte hai but in nodelist we can put only html tags
// sare input ek baar me select ho jayenge jinka type text hai

var inps = document.querySelectorAll('input[type="text"]');
form.addEventListener("submit", function (ev) {
  ev.preventDefault(); // will prevent the page from refreshing
  for (var i = 0; i < inps.length; i++) { // inps.length hume NODELIST me jitne elements hai uska count deta hai
    if (inps[i].value.trim() === "") { // trim start or end se spaces hata deta hai
      h4.textContent = "Error , Some fields are blank";
      h4.style.color = "red";
      break;
    }
    else{
        h4.textContent = "";
    }
  }
});
