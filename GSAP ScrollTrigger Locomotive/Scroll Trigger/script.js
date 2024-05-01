gsap.from("#page1 .circle",{
    scale:0,
    delay:1,
    duration:2,
    rotate:720,
})

gsap.from("#page2 .circle",{
    scale:0,
    delay:1,
    duration:2,
    rotate:720,
    // always write scrollTrigger in camelcase
    // scrollTrigger:"#page2 .circle",
    scrollTrigger:{
        trigger:"#page2 .circle",
        scroller: "body",
        markers:true,   
        start:"top 60%",
        end:"top 30%",
        scrub:true, 
    }
})

gsap.from("#page3 .circle",{
    scale:0,
    delay:1,
    duration:2,
    rotate:720, 
})

//jisko trigger karna hai use trigger me likhte hai
// scrub se animation chl jayega scroll hone pe or animation reverse bhi ho jayega reverse scroll hone pe
// scrub values can be true,false,1,2,3,4,5
// 1-->5 intensity of smoothness of animation increses

// animation kis point se start hoga or kis point pe end hoga that we can control via start , end
//markers --> helping hand to see animation flow --> scroller end,scroller-start __> in sabhi ko dekhne ke liye markers true krte hai