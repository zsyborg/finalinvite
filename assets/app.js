// const anima = anime.timeline();

// animation.add({
//     targets: "panel",
//     opacity: [0, 1],
//     duration: 425,
//     easing: "easeInOutQuad",
// });

// window.addEventListener("click", () => animation.restart());

gsap.from(".panel", { y: 100, ease: "elastic" });  
gsap.to(".panel", { y: 0, duration: 3, ease: "elastic" });

gsap.from(".welcome", { opacity: 0, y: -100, duration: 4, ease: "elastic" });
gsap.to(".welcome", { opacity: 1, y: 0, duration: 4, ease: "elastic" });




