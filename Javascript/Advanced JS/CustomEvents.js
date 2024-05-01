// events, click, dbclick, mouseover, input

const variable_name = new Event("Event_Name")
//How to create custom Events ?
const evt = new Event ("chacha");

// like click , double click event hamne ek naya event bana diya 'chacha' name ka

document.querySelector("button")
.addEventListener("chacha",function(){
    alert("chacha event hua");
})

document.querySelector("button").dispatchEvent(evt)
// chacha name ka toh event koi hota nahi hai fir ye event occur hoga kaise?
// jab bhi kisi custom event ko chalana hota hai toh event occur karane ke liye humlog us elemnt ko select karne ke baad .dispatchEvent(Variable_Name_Which_Has_Stored_The_Event) ka use karte hai

const myevt = new Event("gharjaao");
document.querySelector("button")
.addEventListener("gharjaao", function(){
    alert("jaa raha hu");
})

document.querySelector("button").dispatchEvent(myevt);

//HOW
/*
1. Make Event
2.Attach event to some DOM element
3.Dispatch that event from that DOM element in which you attached the event
*/ 