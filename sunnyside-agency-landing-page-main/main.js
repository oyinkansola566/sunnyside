const menuButton = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.header_nav');
menuButton.addEventListener ('mouseover', () =>
 {
    if (navLinks.style.transform === 'scaleY(1)'){
        navLinks.style.transform = 'scaleY(0)';
     }else {
        navLinks.style.transform = 'scaleY(1)'
    }
});