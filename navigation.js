/*=====================
    Navigation
=======================
*/
import { projects, grid, sectionContact, home, sectionResume, sectionDetails, 
    resumeIcn, contactIcn, gallery, cards, viewBtn, projectIcn, back, sidebarLeft, sidebarRight, imgContainer, tagContainer } from "./dom.js";

import { showInfosLeft, showInfosRight, showDetails } from './display.js'

show(grid)

export const currentSection = {
    name: ''
} 

export function show(sections){
    if(Array.isArray(sections)){
        sections.forEach(el =>{
            el.classList.add('visible');
        });
    } else {
        sections.classList.add('visible');
    };
};

export function hide(sections){
    if(Array.isArray(sections)){
        sections.forEach(el =>{
            el.classList.remove('visible');
        });
    } else {
        sections.classList.remove('visible');
    };
};

viewBtn.addEventListener('click', () => {
    window.open('./images/CV-Kevin-Teisseire.pdf');
});

projectIcn.addEventListener('click', () => {
    hide(home);
    show([grid, projects]);
    currentSection.name = 'projects';
});

back.addEventListener('click', () => {
    if(currentSection.name == 'details'){
        hide(sectionDetails);
        show([projects, grid]);
        imgContainer.source = ``;
        tagContainer.source=``;
        currentSection.name = 'projects';
    } else if (currentSection.name == 'projects'){
        hide([projects, grid]);
        show(home);
        currentSection.name = 'home';
    } else if (currentSection.name == 'resume'){
        hide(sectionResume);
        show(home);
        currentSection.name = 'home';
    } else if (currentSection.name == 'contact'){
        hide(sectionContact);
        show(home);
    };
});

resumeIcn.addEventListener('click', () =>{
    hide(home);
    show(sectionResume);
    currentSection.name = 'resume';
});

contactIcn.addEventListener('click', () =>{
    hide(home);
    show(sectionContact);
    currentSection.name = 'contact';
});


gallery.addEventListener('wheel', (e) => {
  e.preventDefault();
  gallery.scrollLeft += e.deltaY;
});

// PROJECTS SECTION - Display content in sidebar
cards.forEach(card => {
    card.addEventListener('mouseenter', () =>{
        if (card.classList.contains('side-left')){
            show([sidebarLeft]);
            showInfosLeft(card.id);
        } else if (card.classList.contains('side-right')){
            show([sidebarRight]);
            showInfosRight(card.id);
        };
    });
    card.addEventListener('mouseleave', () =>{
        if (card.classList.contains('side-left')){
            hide([sidebarLeft]);
        } else if (card.classList.contains('side-right')){
            hide([sidebarRight]);
        };
    });
});

cards.forEach(card => {
    card.addEventListener('click', () => {
        hide([grid, projects])
        show([sectionDetails])
        showDetails(card.id);
        main.style.overflow = 'visible';
        currentSection.name = 'details'
    });
});



