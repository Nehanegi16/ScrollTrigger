let tl=gsap.timeline({scrollTrigger:{
    trigger:"#main",
    markers:true,
    start:"15% 20%",
    end:"20% 20%",
    scrub:2,
    pin:true
}});
tl.to("#top",{
    top:"-50%"
},'a')
tl.to("#bottom",{
    bottom:"-50%"
},'a')