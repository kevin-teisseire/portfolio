/*=====================
    Navigation
=======================
*/
import { projects, grid, sectionContact, home, sectionResume, sectionDetails, 
    resumeIcn, contactIcn, gallery, cards, projectIcn, back, sidebarLeft, sidebarRight, imgContainer, tagContainer, 
    filtersEl} from "./dom.js";

import { showInfosLeft, showInfosRight, showDetails } from './display.js'

import { detailsContent } from "./data.js";

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
let side = "";
cards.forEach((card, index) => {
    card.addEventListener('mouseenter', () =>{
        if (index % 2 === 0){
            show([sidebarLeft]);
            showInfosLeft(card.id);
        } else {
            show([sidebarRight]);
            showInfosRight(card.id);
        };
    });
    card.addEventListener('mouseleave', () =>{
          if (index % 2 === 0){
            hide([sidebarLeft]);
        } else {
            hide([sidebarRight]);
        };
    });
});

cards.forEach(card => {
    card.addEventListener('click', () => {
        hide([grid, projects]);
        show([sectionDetails]);
        showDetails(card.id);
        main.style.overflow = 'visible';
        currentSection.name = 'details';
    });
});

// ------ Filter system for project cards ------



let activeFilters = new Set();
function toggleFilter(el){
    const filter = el.dataset.filter;
    el.classList.toggle("active");
    if (el.classList.contains("active") && !activeFilters.has(filter)){
        activeFilters.add(filter);
    } else if (!el.classList.contains("active") && activeFilters.has(filter)){
        activeFilters.delete(filter);
    };
};

function displayCards(){
    cards.forEach(card => {
    const type = card.dataset.type;
    const visible = activeFilters.size === 0 || activeFilters.has(type);
    card.classList.toggle("hidden", !visible);
    });    
};

filtersEl.forEach(filterIcn => {
    filterIcn.addEventListener('click', () => {
        const clickedFilter = document.getElementById(filterIcn.id)
        toggleFilter(clickedFilter)
        displayCards()
    })
})


