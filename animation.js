
/* ===================
    Animations 
======================*/

import { icns, black, welcome, navbar, home, drop, bottomTitleEl, bottomTitleText} from './dom.js';
import { show, hide, currentSection } from './navigation.js'

// Welcome text animation
setTimeout(() => {show(welcome)}, 300);

// Drop animation start
setTimeout(() => {launchAnimation()}, 1200);

// Drop animation definition
function launchAnimation() {
    setTimeout(() => { drop.classList.add('fall') },0)
    setTimeout(() => { hide(welcome)}, 800);
    setTimeout(() => { 
        drop.style.opacity = '0';
        createRipples();
        showIcons();
    },900)
    setTimeout(() => { black.classList.add('disapear')},1000);
    setTimeout(() => { black.remove() }, 6000);
    setTimeout(() => {show(navbar)}, 1000);
    setTimeout(() => {
        show(home);
        currentSection.name = 'home';
    }, 1000);
}

// Ripple animation
function createRipples() {
    const ripples = document.getElementById('ripples');
    for (let i = 0; i < 4; i++) {
        const circle = document.createElement('div');
        circle.classList.add('ripple');
        ripples.appendChild(circle);
    }
    setTimeout(() => {
        ripples.innerHTML = '';
    }, 1600);
};

// Show menu icons animation
function showIcons() {
    const icons = document.querySelectorAll('.icn');
    icons.forEach((icon, index) => {
        setTimeout(() => {
            icon.classList.add('visible');
        }, index * 80);
    });
};

// Menu text animation
icns.forEach(icn => {
    icn.addEventListener('mouseenter', () => {
        bottomTitleText.textContent = icn.dataset.text;
        bottomTitleEl.classList.add('visible');
    });
    icn.addEventListener('mouseleave', () => {
        bottomTitleEl.classList.remove('visible');
    });
});