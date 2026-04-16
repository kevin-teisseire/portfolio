const drop = document.getElementById('drop')
const logo = document.getElementById('logo')
const btn  = document.getElementById('icn-wrapper')
const black = document.getElementById('black')
const welcome = document.getElementById('welcome')
const navbar = document.getElementById('navbar')
const bottomTitleEl = document.querySelector('.bottom-title') 
const bottomTitleText = document.querySelector('.icn-text')
const icns = document.querySelectorAll('.icn')
const projects = document.getElementById('projects')
const home = document.getElementById('home')
const back = document.getElementById('back-icn')
const grid = document.querySelector('.section-grid')
const sectionDetails = document.getElementById('section-details')
const cards = document.querySelectorAll('.card')
let currentSection = ""
let hoveredProject = ""
const main = document.getElementById('main')
const detailsTests = document.getElementById('details-tests')
const sidebarLeft = document.getElementById('sidebar-left')
const sidebarRight = document.getElementById('sidebar-right')
const projectIcn = document.getElementById('project-icn')


// ---- dev settings : ------
function show(sections){
    if(Array.isArray(sections)){
    sections.forEach(el =>{
        el.classList.add('visible');
        });
    } else {
        sections.classList.add('visible');
    }
};

function hide(sections){
    sections.forEach(el =>{
        el.classList.remove('visible');
    })
}
//projects.classList.add('visible')
//sectionDetails.classList.add('visible')
//navbar.classList.add('visible')
//grid.classList.add('visible')
//show('projects')

//show([home])


// ------ end -------




// Welcome text animation
setTimeout(() => {welcome.classList.add('appear')}, 300)

// Drop animation start
setTimeout(() => {launchAnimation()}, 1200)

// Drop animation definition
function launchAnimation() {
    setTimeout(() => { drop.classList.add('fall') },0)
    setTimeout(() => { welcome.classList.remove('appear')}, 800);
    setTimeout(() => { drop.style.opacity = '0'
                        createRipples() 
                        showIcons()
                    },900)
    setTimeout(() => { black.classList.add('disapear')
                       welcome.classList.add('disapear') },1000)
    setTimeout(() => { black.remove() }, 6000) 
    setTimeout(() => {navbar.classList.add('visible')}, 1000);
    setTimeout(() => {home.classList.add('visible')}, 1000);
}

// Ripple animation
function createRipples() {
    const ripples = document.getElementById('ripples')
    for (let i = 0; i < 4; i++) {
        const circle = document.createElement('div')
        circle.classList.add('ripple')
        ripples.appendChild(circle)
    }
    setTimeout(() => {
        ripples.innerHTML = ''
    }, 1600)
}

// Show menu icons animation
function showIcons() {
    const icons = document.querySelectorAll('.icn')

    icons.forEach((icon, index) => {
        setTimeout(() => {
            icon.classList.add('visible')
        }, index * 80) 
    })
}

// Menu text animation
icns.forEach(icn => {
    icn.addEventListener('mouseenter', () => {
        bottomTitleText.textContent = icn.dataset.text
        bottomTitleEl.classList.add('visible')
    })
    icn.addEventListener('mouseleave', () => {
        bottomTitleEl.classList.remove('visible')
    })
})

// Sections animations

projectIcn.addEventListener('click', () => {
    show([grid, projects])
    hide([home])
    currentSection == 'projects'
    console.log(currentSection)
})

// Project

projects.addEventListener('click', () => {
    show([sectionDetails])
    hide([grid])
    currentSection = 'details'
    console.log(currentSection)
})

// Back 
back.addEventListener('click', () => {
    if(currentSection == 'details'){
        show(projects)
        hide(details)
    } else if (currentSection == 'projects')
        hide(projects)
        show(home)
    console.log(currentSection)
})


//go back conditions
back.addEventListener('click', () => {
    hide([sectionDetails])
    show([projects, grid])
    imgContainer = ``
    tagContainer=``
})




//Details -> Content management

const gitIcnClasses = "fa-brands fa-github link-icn";
const figmaIcnClasses = "fa-brands fa-figma link-icn";
const siteIcnClasses = "fa-solid fa-at link-icn";
const detailsContent = {
// TEMPLATE
 /*nomProjet : {
    title: "",
    subtitle: "",
    context: ``,
    problem: ``,
    solution: ``,
    stack: [],
    linkList: [
        {site : '', link : "", iconClasses: }
    ],
    decisions: [
      { title: "", desc: "" },
    ],
    results: ``,
    images: ["/portfolio_recover/images/projets/"]
  } */
// REPORT PROJECT CONTENT
    card_report : {
        title: "ReportGen",
        subtitle: "OUTIL CLI D’AUTOMATISATION ET D’ANALYSE DE DÉPENSES AVEC ENVOI DE RAPPORTS MENSUELS",
        context: `Projet personnel développé pour automatiser le suivi de mes dépenses mensuelles. 
    
        L’objectif était de créer un outil simple et rapide à utiliser au quotidien, permettant de centraliser et d’exploiter des données financières personnelles.`,
        problem: `Suivre ses dépenses manuellement dans un tableur est fastidieux : les données s’accumulent sans être réellement exploitées. 
    
        Il est difficile d’avoir une vision claire et automatisée de ses dépenses mensuelles sans y consacrer du temps régulièrement.`,
        solution: `J’ai développé une application en ligne de commande permettant d’enregistrer rapidement des dépenses, de les analyser automatiquement et de générer un rapport mensuel envoyé par email. 
    
        L’ensemble du processus est automatisé afin de réduire au maximum l’effort utilisateur.`,
        stack: ["PYTHON", "POO", "ARGPARSE", "SMTP"],
        linkList: [
            {site : 'Github', link : "https://github.com/kevin-teisseire/reportgen", iconClasses: gitIcnClasses}
        ],
        decisions: [
            { title: "CLI PLUTÔT QU’INTERFACE GRAPHIQUE", desc: "Choix d’une interface en ligne de commande pour privilégier la rapidité de saisie et éviter la complexité d’une interface graphique." },
            { title: "ARCHITECTURE ORIENTÉE OBJET (POO)", desc: "Organisation du code en classes distinctes pour séparer les responsabilités : saisie, analyse et envoi des rapports." },
            { title: "STRUCTURATION DES COMMANDES AVEC ARGPARSE", desc: "Utilisation d’ARGPARSE pour standardiser et simplifier l’utilisation de l’application via des commandes claires."},
            { title: "GÉNÉRATION ET ENVOI AUTOMATISÉ DES RAPPORTS", desc: "Mise en place d’un système d’envoi automatique de rapports mensuels par email."},
            { title: "FORMAT HTML POUR LES RAPPORTS", desc: "Génération de rapports directement lisibles dans le corps de l’email pour une consultation immédiate sans pièce jointe."},
            { title: "MISE EN PLACE DE TESTS UNITAIRES", desc: "Utilisation du module unittest de Python pour tester les différentes parties de l’application et garantir la fiabilité du traitement des données."},

        ],
        results: `Ce projet m’a permis de renforcer mes compétences en Python et en programmation orientée objet. 
    
        J’ai appris à structurer une application complète de bout en bout, depuis la collecte de données jusqu’à leur automatisation.

        Il m’a également permis de comprendre l’importance d’une architecture simple et efficace pour créer des outils personnels réellement utilisables au quotidien.`,
        images: ["/portfolio_recover/images/projets/reportgen-screen1.png", "/portfolio_recover/images/projets/reportgen-screen2.png", "/portfolio_recover/images/projets/pres_report.png"]
    }, 
  // TODO PROJECT CONTENT
    card_todo : {
        title: "To do",
        subtitle: "APPLICATION CLI DE GESTION DE TÂCHES AVEC ORGANISATION PAR PRIORITÉS ET STATUTS",
        context: `Projet personnel développé pour gérer mes tâches quotidiennes de manière simple et rapide via le terminal. 
        
        L’objectif était de créer un outil minimaliste mais efficace pour organiser mon travail.`,
        problem: `Il est difficile de gérer efficacement ses tâches uniquement avec des outils classiques sans perdre en rapidité ou en flexibilité. 
        
        Le besoin était de pouvoir créer, modifier et organiser des tâches simplement, directement depuis le terminal.`,
        solution:`J’ai développé une application en ligne de commande permettant de gérer des tâches via des commandes simples. 
        
        L’utilisateur peut ajouter, modifier, supprimer et organiser ses tâches selon leur priorité ou leur statut, avec une visualisation claire directement dans le terminal.`,
        stack: ["PYTHON", "ARGPARSE", "COLORAMA"],
        linkList: [
            {site : 'Github', link : "https://github.com/kevin-teisseire/reportgen", iconClasses: gitIcnClasses}
        ],
        decisions: [
            { title: "ARGPARSE POUR LA GESTION DES COMMANDES", desc: "Utilisation d’ARGPARSE pour structurer les commandes et rendre l’utilisation intuitive et standardisée." },
            { title: "UTILISATION DE COLORAMA POUR L’UI TERMINAL", desc: "Ajout de couleurs dans le terminal afin de différencier visuellement les niveaux de priorité et améliorer la lisibilité."},
            { title: "ORGANISATION DES TÂCHES PAR STATUTS ET PRIORITÉS", desc: "Mise en place d’un système de classification permettant de structurer les tâches selon leur importance et leur avancement." },
            { title: "SYSTÈME DE FILTRAGE DYNAMIQUE", desc: "Possibilité de filtrer les tâches selon différents critères pour une meilleure navigation dans la liste."},
            { title: "AFFICHAGE DE STATISTIQUES", desc: "Implémentation d’un système permettant d’afficher des statistiques sur l’état des tâches (complétées, en cours, etc.)."}
        ],
        results: `Ce projet m’a permis de renforcer mes compétences en Python et en conception d’applications CLI.

        J’ai appris à structurer un système complet de gestion de données avec des fonctionnalités de tri, filtrage et affichage dynamique.

        Il m’a également permis de mieux comprendre comment améliorer l’expérience utilisateur même dans un environnement terminal.`,
        images: ["/portfolio_recover/images/projets/pres_todo.png"]
    }, 
 // ALEGRIA PROJECT CONTENT
    card_alegria : {
        title: "Alegria website",
        subtitle: "LANDING PAGE DESIGN & INTÉGRATION NO-CODE OPTIMISÉE (FIGMA & WEBFLOW)",
        context: `Projet réalisé dans le cadre de ma formation, consistant à concevoir et développer une landing page complète à partir d’une demande client. 
        
        Le projet incluait le design sur Figma ainsi que l’intégration sur Webflow, avec une attention particulière portée à la structure, à la scalabilité et aux bonnes pratiques de développement no-code.`,
        problem: `Le principal enjeu était de transformer une maquette en un site fonctionnel, fidèle et optimisé, tout en maintenant une structure propre et évolutive. 
        
        Il fallait également gérer plusieurs fonctionnalités (authentification, blog dynamique, interactions) sans compromettre la cohérence globale ni les performances.`,
        solution:`J’ai adopté une approche structurée en m’appuyant sur la méthodologie Client First dans Webflow. 

        J’ai défini un style guide en amont afin d’assurer la cohérence visuelle et d’accélérer le développement.

        L’intégration a été réalisée en respectant rigoureusement la maquette Figma (typographies, espacements, composants), tout en mettant en place une architecture modulaire et responsive.

        J’ai également développé plusieurs fonctionnalités avancées, notamment un blog dynamique avec gestion des accès, des pages d’authentification, ainsi que des interactions et composants réutilisables.`,
        results: `Ce projet m’a permis de renforcer ma capacité à structurer un projet web de manière méthodique, en reliant design et intégration.

        J’ai développé une meilleure maîtrise de Webflow, notamment dans la mise en place d’un style guide et l’utilisation de classes réutilisables pour construire des interfaces propres et maintenables. J’ai également appris à être rigoureux dans l’intégration d’une maquette Figma, en respectant précisément les typographies, les espacements et la hiérarchie visuelle.

        Enfin, ce projet m’a sensibilisé aux bonnes pratiques globales d’un site web : responsive design, SEO, gestion des cookies et intégration de fonctionnalités dynamiques.`,
        stack: ["WEBFLOW", "FIGMA"],
        linkList: [
            {site: 'Figma', link: "https://www.figma.com/design/88VNuPy4hIgh9FIPGHEQDt/Projet-Final-Kevin?node-id=0-1&t=kONjcZidTeEYZNN6-1", iconClasses: figmaIcnClasses},
            {site: 'Site', link : "https://alegria-nocode-batch4-kevin.webflow.io/", iconClasses: siteIcnClasses}
        ],
        decisions: [
            { title: "CLIENT FIRST", desc: "Mise en place d’un Style Guide (Client First) pour structurer le projet et accélérer la production" },
            { title: "FIGMA", desc: "Respect strict de la maquette Figma (typographies, espacements, hiérarchie visuelle)"},
            { title: "WEBFLOW", desc: "Construction d’une architecture de page scalable (Page wrapper / Sections / Containers / paddings globaux)"},
            { title: "COMPOSANTS REUTILISABLES", desc: "Création de composants réutilisables pour optimiser la maintenance"},
            { title: "FONCTIONNALITÉS AVANCÉES", desc: "blog dynamique via collections CMS avec accès restreint. Pages d’authentification (connexion, inscription, mot de passe oublié)"},
            { title: "UI", desc: "Implémentation d’interactions et d’éléments UI (sliders, hovers, états actifs comme la navbar “current”)"},
            { title: "RESPONSIVE", desc: "Optimisation du responsive design sur tous les breakpoints"},
            { title: "SEO", desc: "Prise en compte du SEO (structure, arborescence)"},
            { title: "OUTILS EXTERNES", desc: "Intégration d’outils externes (cookies avec Axeptio, analytics)"}
        ],
        images: ["/portfolio_recover/images/projets/pres_alegria.png", "/portfolio_recover/images/projets/alegria_figma.png"]
    }, 
    // BIKEMARKET PROJECT CONTENT
    card_bikemarket : {
        title: "Bike market",
        subtitle: `PLATEFORME E-COMMERCE DE VENTE ET D’ACHAT DE VÉLOS`,
        context: `Projet réalisé dans le cadre de ma formation, visant à concevoir et développer une marketplace complète avec Bubble. 
        
        L’objectif était de créer une plateforme fonctionnelle autour d’une thématique actuelle : l’achat, la vente et la location de vélos, en intégrant des fonctionnalités dynamiques et une gestion des données utilisateurs.`,
        problem: `Le défi principal était de concevoir une application dynamique capable de gérer des données utilisateurs, des annonces et des interactions complexes, tout en restant fluide et responsive. 
    
        Il fallait également structurer la base de données et les workflows pour permettre une évolution future du produit.`,
        solution:`J’ai développé une marketplace complète sur Bubble en structurant dès le départ la base de données et les logiques métiers. 
        
        Le projet a été pensé comme un produit réel avec une phase de lancement (landing page avec collecte d’emails), suivie d’un espace catalogue dynamique 
        permettant aux utilisateurs d’interagir avec les annonces. 

        J’ai mis en place des systèmes de filtres dynamiques, de navigation sans rechargement de page et de gestion des données en temps réel, 
        tout en assurant une expérience fluide sur tous les supports (desktop, tablette, mobile).`,
        stack: ["BUBBLE", "STRIPE", "OPTION SETS", "CRUD", "BDD"],
        linkList: [
            {site : 'Site', link : "https://my-bike-market.bubbleapps.io/version-test", iconClasses: siteIcnClasses}
        ],
        decisions: [
            { title: "PANIER D’ACHAT (SHOPPING CART)", desc: "Mise en place d’un système de panier permettant aux utilisateurs de sélectionner plusieurs annonces avant achat, avec gestion des quantités et du contenu du panier." },
            { title: "INTÉGRATION DE PAIEMENT AVEC STRIPE", desc: "Intégration de Stripe pour gérer les paiements sécurisés directement dans la marketplace, permettant une expérience d’achat complète et réaliste." },
            { title: "ARCHITECTURE PRODUIT & BASE DE DONNÉES", desc: "Structuration de la base de données dès le départ pour gérer les utilisateurs, les annonces et les interactions de la marketplace." },
            { title: "EXPÉRIENCE DE NAVIGATION FLUIDE", desc: "Mise en place de filtres dynamiques et d’une navigation sans rechargement de page grâce aux custom states et paramètres d’URL."},
            { title: "FONCTIONNALITÉS MARKETPLACE (CRUD)", desc: "Développement des fonctionnalités essentielles : création, modification et suppression d’annonces par les utilisateurs." },
            { title: "STRATÉGIE DE LANCEMENT", desc: "Création d’une landing page avec inscription à une newsletter et suivi du nombre d’inscrits pour valider l’intérêt du produit."},
            { title: "RESPONSIVE DESIGN AVANCÉ", desc: "Utilisation du modèle Flexbox pour garantir une expérience optimale sur desktop, tablette et mobile."}
        ],
        results: `Ce projet m’a permis de développer une vision plus complète de la création d’un produit digital, en allant au-delà de l’interface pour intégrer des logiques métier et des interactions utilisateurs complexes.

        J’ai appris à structurer efficacement une base de données et à concevoir des workflows dynamiques dans Bubble, notamment pour gérer des actions CRUD et des filtres en temps réel.

        Ce projet m’a également permis de renforcer mes compétences en responsive design, en utilisant le système Flexbox de Bubble pour garantir une expérience fluide sur tous les supports.

        Enfin, j’ai acquis une meilleure compréhension des enjeux liés au lancement d’un produit (landing page, collecte d’emails, engagement utilisateur) et à la scalabilité d’une application.`,
        images: ["/portfolio_recover/images/projets/pres_bikemarket.png", "/portfolio_recover/images/projets/bikemarket_panier.png", "/portfolio_recover/images/projets/bikemarket_cards.png"]
    },
    // CRYPTO PROJECT CONTENT
    card_crypto : {
        title: "Crypto-Follow",
        subtitle: "PLATEFORME D’INFORMATION ET D’ACHAT CRYPTO",
        context: `Projet personnel visant à créer une marketplace permettant de consulter, suivre et acheter des crypto-monnaies. 
        
        L’objectif était de centraliser les informations de marché et de proposer une expérience utilisateur simple pour suivre les actifs en temps réel.`,
        problem: `Les informations sur les crypto-monnaies sont souvent dispersées sur plusieurs plateformes et difficiles à suivre en temps réel. Il manquait une interface simple permettant de visualiser rapidement les cours, les tendances et les actifs favoris.`,
        solution: `J’ai développé une marketplace connectée à une API externe permettant d’afficher les cours des crypto-monnaies en temps réel. Les utilisateurs peuvent consulter les actifs, suivre leurs évolutions et accéder à leurs crypto-monnaies favorites depuis une interface centralisée.`,
        
        stack: ["Bubble"],
        linkList: [
            {site : 'Site', link : "https://crypto-followlio.bubbleapps.io/version-test", iconClasses: siteIcnClasses}
        ],
        decisions: [
            { title: "INTÉGRATION D’UNE API CRYPTO EN TEMPS RÉEL", desc: "Connexion à une API externe pour récupérer et afficher les données de marché actualisées en continu." },
            { title: "AFFICHAGE DYNAMIQUE DES DONNÉES DE MARCHÉ", desc: "Mise en place d’un système permettant de visualiser les variations de prix et les tendances en temps réel." },
            { title: "LOGIQUE MARKETPLACE CENTRÉE UTILISATEUR", desc: "Conception d’une interface permettant de retrouver et suivre ses crypto-monnaies préférées facilement." },
            { title: "EXPÉRIENCE UTILISATEUR SIMPLIFIÉE", desc: "Priorité donnée à la lisibilité des informations et à la rapidité d’accès aux données essentielles du marché." },
        ],
        results: `Ce projet m’a permis de comprendre le fonctionnement des API et leur intégration dans une application web.

        J’ai renforcé mes compétences en manipulation de données dynamiques et en affichage en temps réel.

        Il m’a également permis de développer une meilleure compréhension des interfaces orientées données et des enjeux liés à la lisibilité d’informations financières complexes.`,
        images: ["/portfolio_recover/images/projets/pres_crypto.png"]
    }, 
    // UDEMY PROJECT CONTENT
    card_udemy : {
        title: "PROJET — UDEMY UI CLONE",
        subtitle: "REPRODUCTION FIDÈLE D’INTERFACE AVEC FIGMA",
        context: `Projet réalisé dans le cadre de ma formation afin d’améliorer ma maîtrise de Figma et ma compréhension des interfaces complexes. 
        
        L’objectif était de reproduire fidèlement une interface existante pour développer rigueur et précision.`,
        problem: `Le défi était de recréer une interface existante en respectant parfaitement sa structure, ses espacements et sa hiérarchie visuelle, tout en s’adaptant à des contraintes comme l’absence de certaines ressources (typographie propriétaire).`,
        solution: `J’ai reconstruit l’interface en utilisant Figma en m’appuyant sur une analyse détaillée du layout. 
        
        J’ai utilisé les composants, auto-layouts et grilles pour reproduire fidèlement la structure tout en garantissant une cohérence globale.`,
        stack: ["Figma", "CSS Peaper"],
        linkList: [
            {site : 'Figma', link : "https://www.figma.com/proto/NfChfG7OReYxuMg2ZsvHW6/UI-Udemy?node-id=1-3&starting-point-node-id=1%3A3&t=UPiQJdliN6j1DYDj-1", iconClasses: figmaIcnClasses}
        ],
        decisions: [
            { title: "CRÉATION DE COMPONENTS RÉUTILISABLES", desc: "Mise en place de composants pour assurer cohérence et efficacité dans la reproduction de l’interface." },
            { title: "UTILISATION DES AUTO-LAYOUTS", desc: "Structuration des éléments pour reproduire les comportements dynamiques et les espacements." },
            { title: "MISE EN PLACE DE GRILLES ADAPTÉES", desc: "Utilisation de différents types de grilles selon les sections pour respecter le layout original." },
            { title: "STRUCTURATION PAR FRAMES", desc: "Découpage de l’interface en frames pour organiser le design de manière claire et modulaire." },
            { title: "ADAPTATION DES TYPOGRAPHIES", desc: "Recherche de typographies alternatives en analysant le code source, Udemy utilisant une police propriétaire." },
            { title: "APPROCHE PIXEL-PERFECT", desc: "Travail minutieux sur les espacements, tailles et alignements pour coller au plus près du design original." },
        ],
        results: `Ce projet m’a permis de développer une grande rigueur en design d’interface et une meilleure compréhension des systèmes de design existants.

        J’ai renforcé ma maîtrise de Figma, notamment sur les composants, auto-layouts et grilles.

        Il m’a également appris à analyser une interface en profondeur pour en comprendre la logique et la reproduire fidèlement.`,
        images: ["/portfolio_recover/images/projets/pres_udemy.png"]
    }, 
    // NOSTAL PROJECT CONTENT
    card_nostal : {
        title: "PROJET — NOSTAL",
        subtitle: "CRÉATION D’UN PROJET MUSICAL ET DIGITAL COMPLET",
        context: `Projet personnel mené en tant qu’artiste sous le nom Nostal, avec la création d’un album accompagné de contenus visuels et d’un site web immersif. 
        
        L’objectif était de construire un univers artistique complet et cohérent, de la musique jusqu’à l’expérience digitale.`,
        problem: `Le défi était de relier plusieurs disciplines (musique, vidéo, design, web) pour créer une expérience utilisateur fluide et engageante, tout en gardant une identité visuelle forte et reconnaissable.`,
        solution: `J’ai conçu un projet artistique global incluant un album, des clips vidéo et un site web interactif. 
        
        Le site présente les contenus à travers une interface immersive, notamment via un cube interactif en CSS/JavaScript permettant de naviguer entre les clips.`,
        stack: ["Bubble", "ILLUSTRATOR", "ADOBE XD", "PREMIERE PRO", "AFTER EFFECTS", "PHOTOSHOP", "PRO TOOLS", "FL STUDIO", "HTML", "CSS", "JS"],
        linkList: [
            {site : 'Site', link : "https://nostal-el-briscardo.bubbleapps.io/version-test", iconClasses: siteIcnClasses}
        ],
        decisions: [
            { title: "DIRECTION ARTISTIQUE GLOBALE", desc: "Création d’un univers visuel cohérent décliné sur les visuels, clips et interface web." },
            { title: "INTÉGRATION D’UN CUBE INTERACTIF (HTML/CSS/JS)", desc: "Développement d’un cube interactif intégré dans Bubble pour présenter les clips de manière originale et immersive." },
            { title: "CRÉATION D’ICÔNES ANIMÉES", desc: "Design d’icônes sur Illustrator puis intégration et animation dans le site." },
            { title: "PRODUCTION MUSICALE COMPLÈTE", desc: "Composition et production des morceaux sur FL Studio, avec enregistrement et traitement audio sur Pro Tools." },
            { title: "CRÉATION DES CLIPS VIDÉO", desc: "Montage et effets visuels réalisés sur Adobe Premiere Pro et After Effects." },
            { title: "CONCEPTION UX/UI DU SITE", desc: "Réalisation des maquettes sur Adobe XD avant développement sur Bubble." },
        ],
        results: `Ce projet m’a permis de développer une approche multidisciplinaire en combinant création artistique et développement technique.

        J’ai renforcé mes compétences en design, en montage vidéo et en développement web, tout en apprenant à maintenir une cohérence globale sur un projet complexe.

        Il m’a également permis de concevoir une expérience immersive en reliant contenu créatif et interface interactive.`,
        images: ["/portfolio_recover/images/projets/pres_nostal.png"]
    },
    // H2O PROJECT CONTENT
    card_h2o : {
        title: "PROJET — INGÉNIERIE DES EAUX USÉES",
        subtitle: "CONCEPTION D’INTERFACE POUR LA GESTION DES FLUX D’EAUX USÉES",
        context: `Projet de conception d’interface pour un outil d’ingénierie dédié à la gestion et au suivi des écoulements d’eaux usées. Bien que le projet n’ait pas été développé, la phase de design a permis de poser les bases d’une interface métier.`,
        problem: `Les outils d’ingénierie manipulent des données complexes et peu lisibles. Le défi était de concevoir une interface claire permettant de visualiser et comprendre facilement des flux et informations techniques.`,
        solution: `J’ai conçu une maquette sur Figma visant à simplifier la lecture des données grâce à une organisation claire des informations, une hiérarchisation visuelle et une interface adaptée aux besoins métiers.`,
        stack: ["Figma"],
        linkList: [
            {site : 'Figma', link : "https://www.figma.com/proto/FK1doaeUNV04pH6EocKr73/H2O?node-id=13-8&p=f&t=yHkJtxV91IDGK4K6-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=13%3A8", iconClasses: figmaIcnClasses}
        ],
        decisions: [
            { title: "SIMPLIFICATION DE DONNÉES COMPLEXES", desc: "Travail sur la hiérarchisation et la visualisation des informations pour améliorer leur compréhension." },
            { title: "STRUCTURATION DES PARCOURS UTILISATEURS", desc: "Organisation des écrans pour guider l’utilisateur dans la lecture et l’exploitation des données." },
            { title: "APPROCHE MODULAIRE DE L’INTERFACE", desc: "Découpage en sections claires pour faciliter la navigation et l’évolution future du produit." },
            { title: "CHOIX D’UNE INTERFACE SOBRE ET FONCTIONNELLE", desc: "Priorisation de la lisibilité et de l’efficacité plutôt que d’un design décoratif." },
        ],
        results: `Ce projet m’a permis de travailler sur une problématique métier complexe et de développer ma capacité à traduire des besoins techniques en interface utilisateur.

        J’ai appris à simplifier des données complexes et à concevoir des interfaces orientées compréhension et efficacité.

        Même sans développement final, ce projet m’a apporté une expérience concrète en design d’outils professionnels.`,
        images: ["/portfolio_recover/images/projets/pres_h2o.png"]
    }, 
    // REFACTORY PROJECT CONTENT
    card_refactory : {
        title: "REFACTORY ERP",
        subtitle: "CONCEPTION ET DÉVELOPPEMENT D’UN ERP MÉTIER POUR LE RECYCLAGE",
        context: `Refactory est un ERP métier développé pour optimiser les processus de production dans des usines de recyclage. Le projet s’inscrit dans un contexte industriel avec des contraintes fortes liées aux opérations terrain et à la gestion de flux. 
        
        Ce projet a été mené en collaboration avec des équipes d’ingénieurs et les opérateurs terrain, dans un environnement industriel complexe.
        
        Certaines informations, en particulier l'accès à l'ERP, sont confidentielles (NDA). Les éléments présentés sont donc partiels.`,
        problem: `Les processus de production étaient en partie manuels ou peu structurés, ce qui entraînait un manque de visibilité, des erreurs et une perte de temps.

        Le défi était de concevoir un outil capable de centraliser les données, structurer les opérations et s’adapter à des besoins métiers spécifiques et évolutifs.`,
        solution: `J’ai contribué à la conception et au développement d’un ERP sur mesure, pensé en collaboration directe avec les équipes terrain.

        L’outil permet de structurer les processus de production, centraliser les données et améliorer la traçabilité des opérations, tout en restant adaptable aux évolutions des besoins.`,
        stack: ["BUBBLE", "FIGMA", "MIRO", "HTML", "CSS", "JS"],
        linkList: [
            {site : 'Figma', link : "https://www.figma.com/proto/rsPFexa9EDVVy4pafdLMVz/Maquettes-livraison?node-id=6-2&p=f&t=rxPhe5199vz5YD2U-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1", iconClasses: figmaIcnClasses },
        ],
        decisions: [
            { title: "IMMERSION TERRAIN ET ANALYSE MÉTIER", desc: "Recueil des besoins directement dans les usines pour comprendre les contraintes réelles et concevoir un outil adapté aux utilisateurs." },
            { title: "MODÉLISATION DES PROCESSUS (MIRO)", desc: "Cartographie des workflows et structuration des logiques métier avant développement." },
            { title: "MODÉLISATION DE LA BASE DE DONNÉES", desc: "Conception de la structure de données adaptée aux processus métier afin d’assurer la cohérence, la scalabilité et la fiabilité de l’ERP." },
            { title: "CONCEPTION UX/UI SUR FIGMA", desc: "Création de maquettes pour tester et valider les interfaces avant intégration." },
            { title: "DÉVELOPPEMENT NO-CODE SUR BUBBLE", desc: "Implémentation de l’ERP avec une logique modulaire et évolutive." },
            { title: "MISE EN PLACE DE TESTS UNITAIRES", desc: "Validation des fonctionnalités pour garantir la fiabilité du système." },
            { title: "DOCUMENTATION TECHNIQUE", desc: "Rédaction de documentation pour assurer la compréhension et la maintenance du projet." },
            { title: "RÔLE DE PRODUCT OWNER", desc: "Rédaction de user stories, priorisation des fonctionnalités et coordination avec un développeur." },
            { title: "MAINTENANCE ET ÉVOLUTION CONTINUE", desc: "Amélioration continue du produit en fonction des retours utilisateurs et des besoins métiers." },
        ],
        results: `Ce projet m’a permis de développer une vision complète de la création d’un produit digital en contexte professionnel, de l’analyse des besoins jusqu’à la mise en production.

        J’ai acquis une forte capacité à comprendre des problématiques métiers complexes et à les traduire en solutions concrètes.

        Ce projet m’a également permis de développer des compétences en gestion de produit, en communication avec des équipes techniques et métier, ainsi qu’en priorisation.

        Enfin, j’ai appris à travailler sur un projet long terme, en intégrant des cycles d’amélioration continue et de maintenance.`,
        images: ["/portfolio_recover/images/projets/refactory_screen_dem.png", "/portfolio_recover/images/projets/refactory_screen_mcd.png","/portfolio_recover/images/projets/refactory_screen_miro.png", "/portfolio_recover/images/projets/refactory_screen_mpd.png", "/portfolio_recover/images/projets/refactory_screen_uml.png", "/portfolio_recover/images/projets/refactory_screen_gestion.png", "/portfolio_recover/images/projets/refactory_screen_recap.png", "/portfolio_recover/images/projets/refactory_screen_broyage.png"]
    },
    card_otw : {
        title: "OVERTHEWIRE BANDIT",
        subtitle: "PARCOURS D’INITIATION À LA CYBERSÉCURITÉ (33 NIVEAUX VALIDÉS)",
        context: `Bandit est un wargame de cybersécurité permettant d’apprendre les bases en sécurité informatique à travers une série de niveaux progressifs. 
        
        Chaque niveau nécessite de trouver un mot de passe en exploitant des failles ou en manipulant le système.`,
        problem: `Chaque niveau introduit une problématique différente : permissions de fichiers, encodage, processus, ports réseau ou encore manipulation de données. 
        
        Le défi est de comprendre rapidement l’environnement et d’identifier la bonne approche pour progresser.`,
        solution: `J’ai résolu les 33 niveaux en adoptant une démarche progressive : exploration du système, utilisation des commandes Linux, tests d’hypothèses et recherche de solutions adaptées à chaque situation.`,
        stack: ['LINUX', 'BASH/TERMINAL', 'SSH'],
        linkList: [
        ],
        decisions: [
        { title: "UTILISATION AVANCÉE DU TERMINAL LINUX", desc: "Manipulation des fichiers, permissions et processus pour naviguer dans les niveaux." },
        { title: "ANALYSE ET RECHERCHE DE SOLUTIONS", desc: "Utilisation de la documentation et tests pour comprendre chaque problème." },
        { title: "APPROCHE PROBLÈME-SOLVING", desc: "Décomposition des challenges en étapes simples pour identifier les solutions." },
        { title: "COMPRÉHENSION DES BASES EN SÉCURITÉ", desc: "Découverte de notions clés : permissions, encodage, ports, scripts, etc." },
        ],
        results: `Ce projet m’a permis de développer une forte capacité de résolution de problèmes techniques dans un environnement Linux.

        J’ai acquis des bases en cybersécurité et une meilleure compréhension du fonctionnement des systèmes.

        Il m’a également appris à chercher efficacement de l’information et à tester des hypothèses de manière méthodique.`,
        images: ["/portfolio_recover/images/projets/otw_lastlevel.png"]
  }, 
    card_portfolio : {
        title: "PORTFOLIO WEB",
        subtitle: "CONCEPTION ET DÉVELOPPEMENT D’UNE EXPÉRIENCE PORTFOLIO INTERACTIVE",
        context: `Projet personnel visant à concevoir un portfolio interactif permettant de présenter mes projets de manière claire, structurée et engageante. L’objectif était de créer une expérience utilisateur différenciante tout en mettant en valeur mes compétences.`,
        problem: `Les portfolios classiques sont souvent statiques et peu différenciants. Le défi était de concevoir une interface permettant une lecture rapide des projets tout en proposant une expérience interactive et agréable.`,
        solution: `J’ai conçu une interface basée sur une navigation par projets avec affichage dynamique des informations. Une sidebar contextuelle permet d’obtenir rapidement les informations clés au survol, tandis que chaque projet est structuré pour offrir une lecture claire et approfondie.`,
        stack: ["FIGMA", "HTML", "CSS", "VANILLA JS"],
        linkList: [
            {site : 'Github', link : "", iconClasses: gitIcnClasses}
        ],
        decisions: [
            { title: "AFFICHAGE DYNAMIQUE AU SURVOL (HOVER UX)", desc: "Mise en place d’une sidebar qui affiche les informations clés des projets au survol pour améliorer la rapidité de lecture." },
            { title: "STRUCTURATION STANDARDISÉE DES PROJETS", desc: "Organisation de chaque projet avec une structure cohérente (contexte, problème, solution, décisions, résultats) pour faciliter la compréhension." },
            { title: "HIÉRARCHIE VISUELLE ET DESIGN MINIMALISTE", desc: "Choix d’un design épuré mettant en avant le contenu et facilitant la lisibilité." },
            { title: "NAVIGATION FLUIDE ET INTERACTIVE", desc: "Implémentation d’interactions et transitions pour améliorer l’expérience utilisateur." },
            { title: "ORGANISATION DE CONTENU COMPLEXE", desc: "Structuration de nombreux projets avec différents niveaux de lecture (aperçu rapide → détail)." }
        ],
        results: `Ce projet m’a permis de développer une approche complète du design et du développement d’un produit digital.

        J’ai renforcé mes compétences en UX/UI, en structuration de contenu et en développement front-end.

        Il m’a également permis de comprendre comment concevoir une interface orientée utilisateur, capable de présenter efficacement des informations complexes de manière claire et engageante.`,
        images: ["/portfolio_recover/images/projets/pres_portfolio.png"]
  }
};
// Display template
function showDetails(projName){
    console.log('project called :', projName)
    const d = detailsContent[projName];
    console.log('project found :', d)
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
    const tagContainer = document.querySelector('.tag-wrapper');
    tagContainer.innerHTML = '';
    d.stack.forEach(el => {
        const tag = document.createElement('div');
        tag.classList.add('tag');
        tag.innerHTML = `<p class="tag-text">${el}</p>`;
        tagContainer.appendChild(tag);
        });
    //img-list
    const imgContainer = document.querySelector('.results-img-section-container');
    imgContainer.innerHTML = '';
    d.images.forEach(el => {
        const img = document.createElement('div');
        img.classList.add('results-img-wrapper');
        img.style.backgroundImage = `url(${el})`;
        imgContainer.appendChild(img);
    });
    // Center images if they are less than 4
    if(d.images.length < 4){
        console.log('len < 4')
        imgContainer.style.justifyContent = 'center';
    };
    //links
    const linkContainer = document.querySelector('.details-link-wrapper');
    linkContainer.innerHTML = '';
    d.linkList.forEach(el => {
        const link = document.createElement('div');
        link.classList.add('project-link');
        link.innerHTML = `
        <i class="${el.iconClasses}"></i>
        <p class="link-text">${el.site}</p>`;
        console.log(link.innerHTML)
        link.addEventListener('click', () => {
        window.open(el.link);
        });
        linkContainer.appendChild(link);
    });
};

  // DETAILS SECTION - Section appearance
cards.forEach(card => {
    card.addEventListener('click', () => {
        hide([grid, projects])
        show([sectionDetails])
        showDetails(card.id);
        main.style.overflow = 'visible';
        currentSection == 'details'
    });
});

// PROJECTS SECTION - project infos

const infos = {
    /*   Template :
    card_: {
        subtitle: "",
        role: "",
        stack: "",
        strengh: "",
        type: ""
    },    */

    card_bikemarket: {
        subtitle: "MARKETPLACE E-COMMERCE",
        role: "👤 No-code Developer",
        stack: "🛠 Bubble • Stripe",
        strengh: "⚡ Parcours d’achat complet (catalogue → panier → paiement)",
        type: "⏱ Projet de formation"
    },
    card_refactory: {
        subtitle: "ERP INDUSTRIEL",
        role: "👤 Product Builder / Product Owner",
        stack: "🛠 Bubble • Figma • Miro",
        strengh: "⚡ Conception d’un ERP métier + modélisation de données",
        type: "⏱ 3 ans"
    },
    card_crypto: {
        subtitle: "APP DATA TEMPS RÉEL",
        role: "👤 Developpeur no code",
        stack: "🛠 API • JavaScript",
        strengh: "⚡ Intégration et affichage de données crypto en temps réel",
        type: "⏱ Projet personnel"
    },
    card_alegria: {
        subtitle: "LANDING PAGE NO-CODE",
        role: "👤 Web Designer / Webflow Developer",
        stack: "🛠 Figma • Webflow",
        strengh: "⚡ Design system + intégration scalable",
        type: "⏱ Projet de formation"
    },
    card_report: {
        subtitle: "OUTIL D’AUTOMATISATION CLI",
        role: "👤 Développeur Python",
        stack: "🛠 Python • Argparse • SMTP",
        strengh: "⚡ Automatisation complète du suivi de dépenses",
        type: "⏱ Projet personnel"
    },
    card_todo: {
        subtitle: "TASK MANAGER CLI",
        role: "👤 Développeur Python",
        stack: "🛠 Python • Argparse",
        strengh: "⚡ Gestion de tâches avec logique de priorités et filtres",
        type: "⏱ Projet personnel"
    },
    card_udemy: {
        subtitle: "UI DESIGN EXERCISE",
        role: "👤 UI Designer",
        stack: "🛠 Figma",
        strengh: "⚡ Reproduction pixel-perfect d’une interface complexe",
        type: "⏱ Projet de formation"
    },
    card_nostal: {
        subtitle: "PROJET ARTISTIQUE DIGITAL",
        role: "👤 Artiste multidisciplinaire",
        stack: "🛠 FL Studio • After Effects • Bubble",
        strengh: "⚡ Création d’un univers complet (musique + visuel + web)",
        type: "⏱ Projet professionnel"
    },
    card_h2o: {
        subtitle: "INTERFACE MÉTIER (UX/UI)",
        role: "👤 UI/UX Designer",
        stack: "🛠 Figma",
        strengh: "⚡ Simplification de données techniques complexes",
        type: "⏱ Projet de conception"
    },       
    card_portfolio: {
        subtitle: "PORTFOLIO INTERACTIF",
        role: "👤 UI/UX Designer",
        stack: "🛠 HTML • CSS • JavaScript",
        strengh: "⚡ UX dynamique + structuration de contenu",
        type: "⏱ Projet personnel"
    }
};

// DETAILS SECTION - Gallery

const gallery = document.querySelector('.results-section');

gallery.addEventListener('wheel', (e) => {
  e.preventDefault();
  gallery.scrollLeft += e.deltaY;
});


// PROJECTS SECTION - Sidebar appearance
function showInfosLeft(projectName){
    const project = infos[projectName]
    document.getElementById('left-infos-title').textContent = project.title
    document.getElementById('left-infos-subtitle').textContent = project.subtitle
    document.getElementById('left-infos-role').textContent = project.role
    document.getElementById('left-infos-stack').textContent = project.stack
    document.getElementById('left-infos-strengh').textContent = project.strengh
    document.getElementById('left-infos-type').textContent = project.type
};

function showInfosRight(projectName){
    const project = infos[projectName]
    document.getElementById('right-infos-title').textContent = project.title
    document.getElementById('right-infos-subtitle').textContent = project.subtitle
    document.getElementById('right-infos-role').textContent = project.role
    document.getElementById('right-infos-stack').textContent = project.stack
    document.getElementById('right-infos-strengh').textContent = project.strengh
    document.getElementById('right-infos-type').textContent = project.type
}

// PROJECTS SECTION - Display content in sidebar

cards.forEach(card => {
    card.addEventListener('mouseenter', () =>{
        if (card.classList.contains('side-left')){
            show([sidebarLeft]);
            showInfosLeft(card.id)
        } else if (card.classList.contains('side-right')){
            show([sidebarRight]);
            showInfosRight(card.id)
        };
    });
    card.addEventListener('mouseleave', () =>{
        if (card.classList.contains('side-left')){
            hide([sidebarLeft])
        } else if (card.classList.contains('side-right')){
            hide([sidebarRight])
        };
    });
});

