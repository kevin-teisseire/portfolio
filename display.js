/* ========================================
    Display template infos in sections
=========================================== 
*/
import { detailsContent, infos } from './data.js';
import { tagContainer, imgContainer, linkContainer } from './dom.js';

// Display content in project details section
export function showDetails(projName){
    const d = detailsContent[projName];
    if (!d) return;
    document.getElementById('details-title').textContent = d.title;
    document.getElementById('details-subtitle').textContent = d.subtitle;
    document.getElementById('details-context').textContent = d.context;
    document.getElementById('details-problem').textContent = d.problem;
    document.getElementById('details-solution').textContent = d.solution;
    document.getElementById('details-results').textContent = d.results;
    // Decision list
    const decisionContainer = document.querySelector('.details-body-right-content');
    decisionContainer.innerHTML = '';
    d.decisions.forEach(decision => {
        const wrapper = document.createElement('div');
        wrapper.classList.add('decision-wrapper', 'details-body-right-section-wrapper');
        wrapper.innerHTML = `
        <h2 id="decision-title" class="details-decision-title">${decision.title}</h2>
        <p id ="decision-details" class="details-decision-text">${decision.desc}</p>
        `;
        decisionContainer.appendChild(wrapper);
    });
    //tag-list

    tagContainer.innerHTML = '';
    d.stack.forEach(el => {
        const tag = document.createElement('div');
        tag.classList.add('tag');
        tag.innerHTML = `<p class="tag-text">${el}</p>`;
        tagContainer.appendChild(tag);
        });
    //img-list

    imgContainer.innerHTML = '';
    d.images.forEach(el => {
        const img = document.createElement('div');
        img.classList.add('results-img-wrapper');
        img.style.backgroundImage = `url(${el})`;
        imgContainer.appendChild(img);
    });
    // Center images if they are less than 4
    if(d.images.length < 4){
        imgContainer.style.justifyContent = 'center';
    };
    //links
    linkContainer.innerHTML = '';
    d.linkList.forEach(el => {
        const link = document.createElement('div');
        link.classList.add('project-link');
        link.innerHTML = `
        <i class="${el.iconClasses}"></i>
        <p class="link-text">${el.site}</p>`;
        link.addEventListener('click', () => {
        window.open(el.link);
        });
        linkContainer.appendChild(link);
    });
};

// Display content in projects sidebar
// Left sidebar
export function showInfosLeft(projectName){
    const project = infos[projectName];
    document.getElementById('left-infos-title').textContent = project.title;
    document.getElementById('left-infos-subtitle').textContent = project.subtitle;
    document.getElementById('left-infos-role').textContent = project.role;
    document.getElementById('left-infos-stack').textContent = project.stack;
    document.getElementById('left-infos-strengh').textContent = project.strengh;
    document.getElementById('left-infos-type').textContent = project.type;
};
// Right sidebar
export function showInfosRight(projectName){
    const project = infos[projectName];
    document.getElementById('right-infos-title').textContent = project.title;
    document.getElementById('right-infos-subtitle').textContent = project.subtitle;
    document.getElementById('right-infos-role').textContent = project.role;
    document.getElementById('right-infos-stack').textContent = project.stack;
    document.getElementById('right-infos-strengh').textContent = project.strengh;
    document.getElementById('right-infos-type').textContent = project.type;
}

