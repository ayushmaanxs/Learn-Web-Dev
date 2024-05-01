// Create a search bar that displays live search reslts as users type, updating the results without requiring a full page reload
let input = document.querySelector("input");

var data = [
  { name: "john Cena", src: "./Assets/img1.jpg" },
  { name: "maria crypto", src: "./Assets/img3.jpg" },
  { name: "marianne", src: "./Assets/img5.jpg" },
  { name: "johnny deep", src: "./Assets/img2.jpg" },
  { name: "elizabeth swan", src: "./Assets/img4.jpg" },
  { name: "george washington", src: "./Assets/img2.jpg" },
  { name: "katy perry", src: "./Assets/img5.jpg" },
  { name: "johnnson", src: "./Assets/img1.jpg" },
  { name: "katliona", src: "./Assets/img4.jpg" },
  { name: "scarlett johnson", src: "./Assets/img3.jpg" },
];
// data is an array consisting of objects usme humne forEach kiya toh har baar elem me ek ek object aaya hai
// elem wale ka source uthakar src me daal diya or name uthakr h4 me daal diya
var pers = "";
data.forEach(function (elem) {
  pers += `<div class="person">
    <div class="img">
        <img src="${elem.src}" alt="">
    </div>
    <h4>${elem.name}</h4>
</div>`;
});

// ${2+2} isko use krke we can perform any calculations
//people div ke andar humne 4aro div daal diye as pers me 4aro div stored hai for each ke karan

document.querySelector(".people").innerHTML = pers;
input.addEventListener("input", function () {
  var matching = data.filter(function (e) {
    return e.name.startsWith(input.value);
  });
  var newusers = "";
  matching.forEach(function (elem) {
    newusers += `<div class="person">
    <div class="img">
        <img src="${elem.src}" alt="">
    </div>
    <h4>${elem.name}</h4>
</div>`;
  });
  document.querySelector(".people").innerHTML = newusers;
});
