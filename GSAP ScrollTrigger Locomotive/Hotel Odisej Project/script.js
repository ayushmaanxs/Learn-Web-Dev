//PAGE 1 STARTS HERE
var tl = gsap.timeline();
tl.from("#main-title", {
  opacity: 0,
  delay: 0.4,
  duration: 0.6,
  top: 0,
});
tl.to("#image-container img", {
  opacity: 1,
  duration: 1,
  height: "100%",
  width: "100%",
  borderRadius: 0,
});

tl.from("#header", {
  opacity: 0,
  top: "-20%",
  duration: 0.7,
});
//PAGE 1 ENDS HERE

//PAGE 2 STARTS HERE

// var h1Text = document.querySelector("#firsth1").textContent; // #firsth1 ke andar jo bhi likha ho use h1Text variable me store karwa liya
// // console.log(h1Text);
// var splitedText = h1Text.split(""); // nothing ke basis pe split kar liya or use splitedText var me store kar diya
// // console.log(splitedText);
// // since nothing ke basis pe split kiya hai so sare letters even the space also --> alag alag hokkr ek array bana dengey
// //sare words ko alag alag letters me todna tha isliye splittedText ("Basis") BASIS ME NOTHING DIYA
// var clutter = "";
// // jon sa bhi element forEach loop sa aa rha hoga hai wo element elem hai or bar bar us elem ko save kr rhe hai clutter ke andar
// //splitedText ek array or array ke liye hum forEach loop use karte hai
// splitedText.forEach(function (elem) {
//   clutter += `<span>${elem}</span>`;
// });
// // console.log(clutter);
// //clutter ke andar stored hai alag alag letters in span tag
// document.querySelector("#firsth1").innerHTML = clutter;
// //#firsth1 wale ke h1 ke andar html me pura clutter dal diya i.e., span tag wale sare dal diye

// var h1Text2 = document.querySelector("#secondh1").textContent;
// var splitedText2 = h1Text2.split("");
// var clutter2 = "";
// splitedText2.forEach(function(elem){
//   clutter2 += `<span>${elem}</span>`
// })
// console.log(clutter2);
// sare h1 ke liye ek baar me krne ke liye
function textSpliting() {
  var allH1 = document.querySelectorAll("#page2 h1");
  allH1.forEach(function (elem) {
    var clutter = "";
    var h1Text = elem.textContent;
    var splitedText = h1Text.split("");
    // console.log(splitedText)
    splitedText.forEach(function (e) {
      // console.log(e);
      clutter += `<span>${e}</span>`;
    })
    elem.innerHTML = clutter;
  })
}

function gsapAnimation() {
  gsap.to("#page2 h1 span", {
    color: "#E3E3C4",
    stagger: 0.05,
    scrollTrigger: {
      trigger: "#page2 h1",
      scroller: "body",
      start: "top 60%",
      end: "top -28%",
      scrub: 5,
    }
  })
}
textSpliting()
gsapAnimation()


//PAGE 2 ENDS HERE
