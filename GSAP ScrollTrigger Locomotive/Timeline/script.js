var tl = gsap.timeline()

tl.to("#box1",{
    x:1200,
    rotate:360,
    scale:0.5,
    duration:2,
    delay:1,
})

tl.to("#box2",{
    x:1200,
    rotate:360,
    scale:0.5,
    duration:2,
})

tl.to("#box3",{
    x:1200,
    rotate:360,
    scale:0.5,
    duration:2,
})

//using timeline() humne without box2 or box3 me calculated delay diye bina bhi 1 - 1 krke animate kara liya
// jab bhi hum timeline ko kisi variable me store krte hai uske badd gsap.to ke jgh pe varname.to use krte hai

/*
gsap.to("#box1",{
    x:1200,
    rotate:360,
    scale:0.5,
    duration:2,
    delay:1,
})

gsap.to("#box2",{
    x:1200,
    rotate:360,
    scale:0.5,
    duration:2,
    delay:3,
})

gsap.to("#box3",{
    x:1200,
    rotate:360,
    scale:0.5,
    duration:2,
    delay:5,
})
*/