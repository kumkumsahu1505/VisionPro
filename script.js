function loco() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
  });
}
loco();


gsap.to('.page2Line', {
  y: -800,
  duration: 2,
  ease:'power1.inOut',
  scrollTrigger: {
    tigger: '.page2Line',
    scroller: '.main',
    // pin: true,
    start: '100% 80%',
    end: '250% 100%',
    // markers:true,
    scrub: 4,
  }
})

gsap.to('.headPhone',{
  rotateY:360,
  yoyo:true,
  duration:10,
  stagger:1,
  repeat:-1,
  scrollTrigger:{
    scroller:'.main',
    trigger:'.headPhone',
    //  markers:true,
     start:'5% 45%',
     end:'100% 10%'
  }
})

$(".page3 button").mousemove(function(){
  $(".page3 button").css({"background-color":"black","color":"white"})
})
$(".page3 button").mouseleave(function(){
  $(".page3 button").css({"background-color":"white","color":"black"})
})

$(".para button").mousemove(function(){
  $(".para button").css({"background-color":"orange","color":"black"})
})
$(".para button").mouseleave(function(){
  $(".para button").css({"background-color":"white","color":"black"})
})