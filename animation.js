
/* ===================
    Animations 
======================*/

import { 
    icns, black, welcome, navbar, home, drop, bottomTitleEl, 
    bottomTitleText, coin, flipBtn, linkedinIcn, mailIcn,
    projectIcn,
    nom,
    nomWrapper} from './dom.js';
import { show, hide, currentSection, showAndBlur } from './navigation.js'

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
        drop.style.pointerEvents = 'none';
        createRipples();
    },900)

    setTimeout(() => {
        showIcons()
    }, 1100);
    setTimeout(() => { black.classList.add('disapear')},100);
    setTimeout(() => { black.remove() }, 6000);
    setTimeout(() => {
        show(navbar)
    }, 1000);
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

let endOfIconAnimation = false
// Show menu icons animation
function showIcons() {
    const icons = document.querySelectorAll('.icn');
    icons.forEach((icon, index) => {
        setTimeout(() => {
            icon.classList.add('visible');
        }, index * 300);
    });
    setTimeout(() => {
        bottomTitleText.textContent = "Projets";
        bottomTitleEl.classList.add('visible')
        endOfIconAnimation = true
        projectIcn.classList.add("hovered")
    }, 1500); 
    setTimeout(() => {
        makeItShine()
    }, 1700);
 
};

// window.addEventListener("mousemove", () => {
//     if (endOfIconAnimation == true){
//         projectIcn.style.opacity = 0.5;
//         endOfIconAnimation == false
//     }
// });




// Menu text animation
icns.forEach(icn => {
    icn.addEventListener('mouseenter', () => {
        if (endOfIconAnimation === true){
            icns.forEach(icn => {
                icn.classList.remove("hovered")
                });
            };
        bottomTitleText.textContent = icn.dataset.text;
        bottomTitleEl.classList.add('visible');
        
        icn.classList.add("hovered")
    });
    icn.addEventListener('mouseleave', () => {
        bottomTitleEl.classList.remove('visible');
        icn.classList.remove("hovered")
    });
});

function makeItShine(){
    const letters = document.querySelectorAll('.letter')
    let time = 0
    letters.forEach(el => {
        setTimeout(() => {
            el.classList.add('shine')
            el.addEventListener('animationend', () => {
                el.classList.remove('shine')
            }, {once: true})
        }, time);
        time += 100
    })
}

nomWrapper.addEventListener("mouseenter", () => {
    makeItShine()
})

