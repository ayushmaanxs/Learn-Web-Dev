// Build a character counter for a text area or input field, which updates in real time as the user types and enforces a charcter limit

var txtarea = document.querySelector("textarea");
var counter = document.querySelector("#counter")
txtarea.addEventListener("input",function(){
    counter.textContent = txtarea.value.length;
})