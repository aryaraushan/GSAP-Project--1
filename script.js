gsap.to(".box1",{
    x:600,
   duration:3,
   delay:1,
   rotate:360,
   backgroundColor:"bloue",
   borderRadius:"50%",
   repeat:-1,
   yoyo:true

})
gsap.to(".box2",{
    y:330,
    duration:3,
    delay:1,
    rotate:360,
   backgroundColor:"bloue",
   borderRadius:"50%",
   repeat:-1,
   yoyo:true
})
gsap.to(".box3",{
    x:-610,
    duration:3,
    delay:1,
    rotate:360,
   backgroundColor:"bloue",
   borderRadius:"50%",
   repeat:-1,
   yoyo:true
})
gsap.to("h1",{
   y:-60,
   duration:3,
   delay:1,
   opacity:1,
   stagger:1,
   repeat:-1,
   yoyo:true
})

gsap.to("h3",{
    y:-55,
    duration:2,
    delay:1,
    opacity:1,
    stagger:1,
    repeat:-1,
    yoyo:true
})
// var t1 = gsap.timeline()
// t1.from("h1",{
//     y:-30,
//     opacity:0,
//     duration:2,
//     delay:0.2,
//     repeat:-1,
//     yoyo:true
// })
// t1.from("h4",{
//     y:-30,
//     opacity:0,
//     repeat:-1,
//     yoyo:true,
//     duration:2,
//     delay:0.2
// })
