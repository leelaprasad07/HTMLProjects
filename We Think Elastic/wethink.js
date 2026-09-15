document.querySelector("#startvideo")
let tl = gsap.timeline();

tl.from(".page1", {
    y: 100,
    top: "20%",
    duration: 4,
    stagger: 0.3
})

gsap.to("#startvideo", {
    width: "100%",
    height: "100%",
    duration: 30,
    scrollTrigger: {
        trigger: "#startvideo",
        scroller: "body",
        start: "top 100%",
        end: "top 0%",
        width: "100%",
        height: "100%",
        scrub: 3
    }
})

gsap.to(".page4 h1", {
    transform: "translateX(-165%)",
    scrollTrigger: {
        trigger: ".page4",
        scroller: "body",
        end: "top -120%",
        start: "top 0",
        pin: true,
        scrub: 0
    }
})