gsap.to("#container1", {
    duration: 1,
    x: "-50%",
    scrollTrigger: {
        trigger: "#container1",
        start: "top top",
        end: "bottom top",
        scrub: true,
        // markers: true
    },
});
gsap.to("#container2", {
    duration: 1,
    x: "-100%",
    scrollTrigger: {
        trigger: "#container1",
        start: "top top",
        end: "bottom top",
        scrub: true,
        // markers: true
    },
});


const link1 = document.querySelector("#link1");
const link3 = document.getElementById("link3");
const link2 = document.querySelector("#link2");
const container1 = document.querySelector("#container1");
const container2 = document.querySelector("#container2");
const container3 = document.querySelector("#container3");

link1.addEventListener("click", () => {
    console.log("clicked");
    container1.scrollIntoView({
        behavior: "smooth",
    });
});

link2.addEventListener("click", () => {
    console.log("clicked");
    container2.scrollIntoView({
        behavior: "smooth",
    });
});

link3.addEventListener("click", () => {
    console.log("clicked");
    container3.scrollIntoView({
        behavior: "smooth",
    });
});





gsap.from("#container2", {
    duration: 1,
    x: "-100%",
    scrollTrigger: {
        trigger: "#container2",
        start: "top top",
        end: "bottom top",
        scrub: true,
        // markers: true
    },
});
gsap.to("#container3", {
    duration: 1,
    x: "100%",
    scrollTrigger: {
        trigger: "#container2",
        start: "top top",
        end: "bottom top",
        scrub: true,
        // markers: true
    },
});
gsap.from("#container3", {
    duration: 1,
    x: "100%",
    scrollTrigger: {
        trigger: "#container3",
        start: "top top",
        end: "bottom top",
        scrub: true,
        // markers: true
    },
});

gsap.to("#container4", {
    duration: 1,
    x: "-100%",
    scrollTrigger: {
        trigger: "#container3",
        start: "top top",
        end: "bottom top",
        scrub: true,
        // markers: true
    },
});
