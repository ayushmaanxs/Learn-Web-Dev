var tl = gsap.timeline(); // taki #nav and #main ka animation ek ek krke chale
//1st nav ka sara animation chalega then #main h1 ka sara animation chalega

tl.from("#nav h4",{
    y: -50,
    opacity: 0,
    delay: 0.4,
    duration: 0.7,
    stagger:0.3,    // taki ek ek karke chale animations sare h4 ka
})

tl.from("#main h1",{
    x:-500,
    opacity:0,
    duration:0.8,
    stagger:0.4,    //taki ek ek karke animation chale sara h1 kaa
})

tl.from("img",{
    x: 100,
    rotate:45,
    opacity:0,
    duration:0.5,
    stagger:0.5,
})
tl.from("#footer h3",{
    y: 100,
    opacity:0,
    duration:0.7,
    stagger:0.5,
})

