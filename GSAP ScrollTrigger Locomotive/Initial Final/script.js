// GSAP - GSAP ek library hai js ka jiske madad se hmlog moving animations banate hai
// GSAP - GreenSock Animation Platform
// GSAP ka cdn apne script ke just upar paste krna hai html file me

//2 methods hote hai GSAP me
// Initial to Final and Final to initial
// initial to final ke trf jana hai toh gsap.to
// final to initial ke taraf jana hai toh gsap.from

// gsap.to  animation start #box ke initial state se hoga or finally jo bhi properties gsap.to me hai un sabko wo inherit kr lega

gsap.to("#box",{
    x: 1000,    // x axis pe 1000 px chale jao
    rotate:360,
    backgroundColor:"blue",
    duration:2,
    delay:1,
})

// gsap.from me jo property dete hai un properies ko #box already inherit kar lega or wahi se animation start hoga or finally #box apne initial position pe aakr animation khtm kr dega
gsap.from("#box",{
    x: 1000,    // x axis pe 1000 px chale jao
    rotate:360,
    backgroundColor:"blue",
    duration:2,
    delay:1,
})
