const bodyTag = document.querySelector('body');
const menuToggle = document.querySelector('a.menu-toggle');
const hamburgerIcon = document.querySelector('a.menu-toggle svg');


// Hamburger toggle

// Listen for click
menuToggle.addEventListener('click', () => {
    bodyTag.classList.toggle('nav-open');
    console.log('open hamburger menu!');

    // Change svg icon to closed when opened
    if (bodyTag.classList.contains('nav-open')) {
        gsap.to(".burger-top", {ease: 'power4.out', rotation: 0, transformOrigin: "50% 50%", y: 7 })
        gsap.to(".burger-middle", {ease: 'power4.out', rotation: 0, transformOrigin: "50% 50%", y: -3 })
        gsap.to(".burger-bottom", {ease: 'power4.out', rotation: 0, transformOrigin: "50% 50%", y: -10 })
        gsap.to(".burger-top", {ease: 'power4.out', rotation: 45, transformOrigin: "50% 50%", delay: 0.25 })
        gsap.to(".burger-middle", {ease: 'power4.out', rotation: 45, transformOrigin: "50% 50%", delay: 0.25 })
        gsap.to(".burger-bottom", {ease: 'power4.out', rotation: -45, transformOrigin: "50% 50%", delay: 0.25 })
    } else {
        gsap.to(".burger-top", {ease: 'power4.out', rotation: 0, transformOrigin: "50% 50%", y: 7 })
        gsap.to(".burger-middle", {ease: 'power4.out', rotation: 0, transformOrigin: "50% 50%", y: 0 })
        gsap.to(".burger-bottom", {ease: 'power4.out', rotation: 0, transformOrigin: "50% 50%", y: -10 })
        gsap.to(".burger-top", {ease: 'power4.out', rotation: 0, transformOrigin: "50% 50%", y: 0, delay: 0.25 })
        gsap.to(".burger-bottom", {ease: 'power4.out', rotation: 0, transformOrigin: "50% 50%", y: 0, delay: 0.25 })
        }
});