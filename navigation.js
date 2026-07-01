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

export function showAndBlur(sections){
    if(Array.isArray(sections)){
        setTimeout(() => {
            sections.forEach(el =>{
            el.classList.add('visible');
            });
        }, 400);
    } else {
        setTimeout(() => {
            sections.classList.add('visible');
        }, 400);
    };
};

export function hideAndBlur(sections){
    if(Array.isArray(sections)){
        sections.forEach(el =>{
            el.classList.remove('visible');
        });
    } else {
        sections.classList.remove('visible');
    };
};

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
    hideAndBlur(home);
    showAndBlur([grid, projects]);
    currentSection.name = 'projects';
});

back.addEventListener('click', () => {
    if(currentSection.name == 'details'){
        hideAndBlur(sectionDetails);
        showAndBlur([projects, grid]);
        imgContainer.source = ``;
        tagContainer.source=``;
        currentSection.name = 'projects';
    } else if (currentSection.name == 'projects'){
        hideAndBlur([projects, grid]);
        showAndBlur(home);
        currentSection.name = 'home';
    } else if (currentSection.name == 'resume'){
        hideAndBlur(sectionResume);
        showAndBlur(home);
        currentSection.name = 'home';
    } else if (currentSection.name == 'contact'){
        hideAndBlur(sectionContact);
        showAndBlur(home);
    };
});

resumeIcn.addEventListener('click', () =>{
    hideAndBlur(home);
    showAndBlur(sectionResume);
    currentSection.name = 'resume';
});

contactIcn.addEventListener('click', () =>{
    hideAndBlur(home);
    showAndBlur(sectionContact);
    currentSection.name = 'contact';
});


gallery.addEventListener('wheel', (e) => {
    e.preventDefault();
    gallery.scrollLeft += e.deltaY;
});

// ------ PROJECTS SECTION - Display content in sidebar ------


// Filter system for project cards 

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

// Display sidebar left or right

function getVisibleCards(){
    return [...cards].filter(card => {
        const type = card.dataset.type
        return activeFilters.size === 0 ||
            activeFilters.has(type);
    });
};

cards.forEach((card) => {
      card.addEventListener('mouseenter', () =>{
        const visibleCards = getVisibleCards()
        const index = visibleCards.indexOf(card)
        if (index === -1) return;
        if (index % 2 === 0){
            show([sidebarLeft]);
            showInfosLeft(card.id);
        } else {
            show([sidebarRight]);
            showInfosRight(card.id);
        };
    });
    card.addEventListener('mouseleave', () =>{
        const visibleCards = getVisibleCards()
        const index = visibleCards.indexOf(card)
        if (index === -1) return;
        if (index % 2 === 0){
            hide([sidebarLeft]);
        } else {
            hide([sidebarRight]);
        };
    });
});

// Go to project details

cards.forEach(card => {
    card.addEventListener('click', () => {
        hideAndBlur([grid, projects]);
        showAndBlur([sectionDetails]);
        showDetails(card.id);
        main.style.overflow = 'visible';
        currentSection.name = 'details';
    });
});

