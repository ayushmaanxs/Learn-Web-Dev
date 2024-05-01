gsap.to("#page2 img",{
    width: "100%",
    scrollTrigger:{
        trigger:"#page2", 
        scroller:"body",
        markers:true,
        start:"top 0",
        end:"top -100%",
        scrub:2,
        pin:true,
    }
})

//jab bhi hume pin property use krna hota hai toh jipe animation apply krna hai uske parent ko trigger me likhte hai isliye yaha humne #page2 ko trigger kiya hai not "#page2 img"

//pin:true karne se hmara page2 pin ho gaya and jab pura animation khtm hua toh aage scroll hua
// scrub 2 taki animation smooth ho
// top se 0% pe animation start hoga or jab top se -100% ho jayega toh  animation khtm