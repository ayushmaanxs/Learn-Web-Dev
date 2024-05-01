// Event Delegation = jab ek event listher se kaii sare different elements ke events ko handle kar sake
// event listner ko parent pe lagao and unko id,class ya fir tag ke basis par differentiate karke different task karao

//EVENT BUBBLING
// jis bhi button pe click hota hai agar uspe eventListner naa laga ho toh uske parent ke eventLister ko dekha jaata hai or agar uspe bhi eventListner nhi mila toh uske bhi parent pe check hota hai

//EVENT BUBBLING : ek eventListner se boht saare kam kar lena

//in below example hamne PARENT wali id pe event listner lagaya hai so agar play ya pause kisi bhi button pe click hota hai toh eventListner Parent pe jo laga hai wahi chalega as dono button are the child of #parent

//if else condition kaa use karke humne ek eventListner se dono buttons ko chala liya ise hi event delegation bolenge

var parent = document.querySelector("#parent");
parent.addEventListener("click", function (details) {
  console.log(details); /// extend the details in console we'll get the below  functions like target , timestamp etc.
  console.log(details.target);
  console.log(details.timeStamp);

  if(details.target.id === "play"){
    console.log("Play Song");
  }
  else if(details.target.id === "pause"){
    console.log("Pause Song");
  }
}); 

// function(details) parameter me details ke jagah kuch bhi likh skte hai other than keyword, wohi parameter hame button click ki full deatils deta hai

//details.target me button ka id ya class pata lagega jispe click hua hai
//details.target.id === "play" --> agar jis button pe click hua hai uska id play ke equal hua toh

// 'details' ke andar sara data aa jata hai event ke regarding