// jab bhi hum kisi element par kisi bhi prakar ka action karte hai toh waha par event by default automatically raise hota hai or ab agar humne koi event listner nhi bnaya hain toh wo event ignore kar diya jata hai but humne agar listner lagaya hai us event par toh wo event ignore nhi kiya jayega balki uska listner chalega

var btn = document.querySelector("button");
// btn.addEventListener('event_name', callback)
// callback means function
// SYNTAX :
// btn.addEventListener('event', function(){});

btn.addEventListener("click", function () {
  //   alert();
  btn.textContent = "Starting...";
  btn.style.backgroundColor = "red";
});

btn.addEventListener("dblclick", function () {
  btn.style.backgroundColor = "yellow";
});

btn.addEventListener("dblclick", function () {
  btn.style.backgroundColor = "yellow";
});

btn.addEventListener("mouseover", function () {
  btn.textContent = "yellow";
});

btn.addEventListener("mouseleave", function () {
  btn.textContent = " Blue";
});

// to know the location of mouse

document.querySelector("body")
.addEventListener("mousemove",function(dets){
    // console.log("moving...");
    console.log(dets);  // details of mouse stored in dets
})
