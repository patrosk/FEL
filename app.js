const bodyTag = document.querySelector('body');
const menuToggle = document.querySelector('a.menu-toggle');


// Hamburger toggle

// Listen for click
menuToggle.addEventListener('click', () => {
    bodyTag.classList.toggle('nav-open');
    console.log('open hamburger menu!');
});