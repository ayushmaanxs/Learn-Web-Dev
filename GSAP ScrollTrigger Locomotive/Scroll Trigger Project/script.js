gsap.to("#page2 h1",{
   transform:"translateX(-142%)",
    scrollTrigger:{
        trigger:"#page2", // pin use kr rhe hai so h1 ke parent ko trigger kr rhe hai
        scroller:"body",
        markers:true,
        start:"top 0",
        end:"top -100%",
        scrub:5,
        pin:true,
    }
})