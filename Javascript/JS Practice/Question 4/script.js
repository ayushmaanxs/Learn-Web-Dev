// Create an unordered list. Allow the users to add and remove list items dynamically using buttons
let add = document.querySelector("#add");
let remove = document.querySelector("#remove");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");
let li; // li ko bahar banaya as hume ise add or remove dono me use krna hai so scope wala problem aa jayega agar add wale listner me declare kar diya ise toh

add.addEventListener("click", function () {
  if (inp.value.trim() === "") {
  } else {
    li = document.createElement("li");  // ye ek li tag create kar dega or li name ke variable me store kr dega
    li.textContent = inp.value; //input me jo value enter hua use hi li me pass kar de using textcontent
    // console.log(li);
    ul.appendChild(li); //ul me ek li child item ko include kar de
    inp.value = ""; // add button pe click hone ke baad firse placeholder pahle jaisa kar dega 
  }
});

remove.addEventListener("click", function () {
  ul.removeChild(li); //li me jo child stored hai usko remove kr dega
});
