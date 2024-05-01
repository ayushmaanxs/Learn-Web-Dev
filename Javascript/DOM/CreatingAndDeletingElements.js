// createElement('html tag name')
var hone = document.createElement("h1");
hone.textContent = "hey";
hone.classList = "makeitYG";

// html wala h1 element create karke using javascript usme hey likhar use makeitYG class de diya or ek hone named variable me store karwa diya

// kahaParRakhoge-->selecting.appendChild()
// append means JODO and Child means baccha
document.querySelector("body").appendChild(hone);
// body tag ko select kiya fir usme h1 tag jod diya

var image = document.createElement("img"); // creating img tag
image.src = "./image4.jpg";
document.querySelector("body").appendChild(image);

// removeChild() --> to remove any child using js
document.querySelector("body").removeChild(image);  

// pahle hamne image add kiya tha ab hum use remove kar rahe hai