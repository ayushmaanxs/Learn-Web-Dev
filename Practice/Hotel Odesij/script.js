
function loco(){
    gsap.registerPlugin(ScrollTrigger);
  
  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
  
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);
  
  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });
  
  
  
  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
  
  }
  function swiperWorking(){
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: "auto",
      pagination: {
        el: ".swiper-pagination",
        type:"fraction"
      },
      navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
    });
    
  }
  loco()
  swiperWorking()
  var tl = gsap.timeline();
  tl.from("#page1 svg", {
    y: -40,
    opacity: 0,
    delay: 0.3,
    duration: 0.7,
  })
    .from("#page1 img", {
      scale: 0.5,
      borderRadius: "10px",
      duration: 1,
      ease: Power4.easeOut,
    })
    .from("#nav", {
      y: -50,
      opacity: 0,
      duration: 0.6,
    });
  
  
  
  var h2Data = document.querySelectorAll("#page2 h2")
  
  h2Data.forEach(function(elem){
    var textData = elem.textContent
    var splitedText = textData.split("")
    var clutter = ""
    splitedText.forEach(function(e){
      clutter += `<span>${e}</span>`
    })
    elem.innerHTML = clutter
  })
  
  gsap.to("#page2 h2 span",{
    color:"#E3E3C4",
    stagger:0.2,
    scrollTrigger:{
      trigger:"#page2 h2 span",
      scroller:"#main",
      start:"top 50%",
      end:"top 0",
      scrub:2
    }
  })
  
  
  gsap.to("#page2 #svg2,#page2 #svg3",{
    left:"-100vw",
    scrollTrigger:{
      trigger:"#page2 #svg2",
      scroller:"#main",
      scrub:2,
    }
  })
  
  var tl2 = gsap.timeline({
    scrollTrigger:{
      trigger:"#page5-left",
      scroller:"#main",
      start:"top 50%",
      end:"top 35%",
      scrub:3,
      // markers:true
    }
  })
  tl2.to("#page5-left",{
    transform:"translateX(-20%)",
    duration:1,
  },"anim2")
  tl2.to("#page5-right",{
    transform:"translateX(20%)",
    duration:1,
  },"anim2")
  tl2.from("#page5-center",{
    transform:"translateY(30%)",
    duration:1,
    opacity:0
  },"anim2")
  