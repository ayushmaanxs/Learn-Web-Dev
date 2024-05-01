// Create an HTML Page with a button. When the button is clicked, change the text of a paragaraph element

let btn = document.querySelector("button");
let para = document.querySelector("p")
btn.addEventListener("click",function(){
    para.textContent = "AA GAYA HUN MAIN";
})