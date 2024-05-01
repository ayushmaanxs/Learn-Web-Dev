// Built a countdown timer that starts when a button is clicked and updates the display in real-time

var start = document.querySelector("#start");
var stop = document.querySelector("#stop");
var h3 = document.querySelector("h3");
var int; // kyuki hame ise stop krne ke liye bhi use karna hai so scope ki dikkt naa aaye is wjh se fn ke bahar banaya
start.addEventListener("click", function () {
    let count = 0;
    int = setInterval(function(){
        // console.log(count);
        h3.textContent = count;
        count++;    // har 1 sec i.e., 1000ms ke baad count ka value increase hoga
    },1000)
});

// setInterval(callback , timer in ms);
//setInterval(function(){},1000); --> har hazar miliseconds me ye function chalega
stop.addEventListener("click", function () {
   clearInterval(int); // to stop we need to clear the interval
});