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

let t1 = gsap.timeline();
t1.to('.page2Line', {
  y: -800,
  duration:5,
  // ease:'power1.inOut',
  scrollTrigger: {
    tigger: '.page2Line',
    scroller: '.main',
    start: 'top top',
    end: '450% 100%',
    // markers:true,
    pin:'.page2' ,
    scrub: 5,
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

t1.from('.page5 h1',{
    y:800,
    duration:10,
    scrollTrigger : {
     tigger:'.page5 h1',
     scroller:'.main',
      start:'top top',
      // end:'bottom bottom',
    //  markers:true,
     pin:'.page5',
     scrub:20,
    }
})

t1.to('.pg5V',{
  y:-150,
  left:'5%',
  right:'5%',
  duration:5,
  width:'90%',
  scrollTrigger:{
    trigger:'.pg5V',
    scroller:'.main',
    start:'top top',
    scrub:5
  }
},"anim")
