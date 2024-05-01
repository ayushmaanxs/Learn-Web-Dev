// kisi ko bhi change karne se pahle sabse pahla step hota hai usko select karna
// textContent  and innerHTML

//textContent

var btn = document.querySelector("button");
btn.textContent = "Starting ..."; // due to single = the initial text of button will be replaced by "Starting...""

var htext = document.querySelector("h1");
htext.textContent += "Ayushmaan"; // due to += the text "Ayushmaan" will be added after whatever written in h1 initially

// innerHTML
var hnew = document.querySelector(".htwo")
hnew.innerHTML += "<i>Hello Ji</i>"

//jab hame text content me bhi HTML tag use karna ho toh textContent ke jgh innerHTML use krenge otherwise tag bhi text ki trh print ho jayega