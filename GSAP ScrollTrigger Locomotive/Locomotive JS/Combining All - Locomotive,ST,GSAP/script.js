gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#wrapper"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#wrapper" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#wrapper", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#wrapper").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

// search for locomotive scrolltrigger codepen on google , open 1st site copy the js code and paste it here remove from red panel to 72th line

gsap.from("#page1 #box",{
    scale:0,
    duration:1,
    delay:1,
    opacity:0,
    rotate:360,
})
gsap.from("#page2 #box",{
    scale:0,
    duration:1,
    opacity:0,
    rotate:360,
    scrollTrigger:{
        trigger:"#page2 #box",
        scroller:"#wrapper", // pahle yaha body likhte the but ab parent div ka name de rhe hai
        start:"top 50%",
        markers:true,
    }
})

// jb bhi hume locomotive or scrollTrigger ko combined use karna hota hai toh scroller me hum body naa likhkr parent div/main div ka name dete hai


