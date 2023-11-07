/* ==============================================================
HERO IMG HEIGHT
============================================================== */
function setHeroHeight() {
    const hero = document.getElementById("heroContainer");
    const heroWidth = hero.offsetWidth;
    // console.log(heroWidth) // works
    let heroHeight = heroWidth * 0.666666666;
    let heroHeightStr = heroHeight.toString() + "px"
    hero.style.height = heroHeightStr;
}
document.addEventListener("resize", () => {setHeroHeight()})
document.addEventListener("load", () => {setHeroHeight()})

/* ==============================================================
SUBNAV BAR
============================================================== */
const navLinks = document.getElementsByClassName("navLinks"); // main page links
const subnavContainer = document.querySelector("#subnavContainer")
const subnavSpacer = document.querySelector("#subnavSpacer"); // spacer so that subLinks are positioned below main link
const subnavItems = document.querySelector("#subnavItemsContainer"); // ul
// --- li elements ---
const subnavLinks = document.getElementsByClassName("subnavLinks");
const javascript1 = document.querySelector("#javascript1");
const javascript2 = document.querySelector("#javascript2");
const jsDom1 = document.querySelector("#jsDom1");
const jsDom2 = document.querySelector("#jsDom2");
const css1 = document.querySelector("#css1");
const css2 = document.querySelector("#css2");
const databases1 = document.querySelector("#databases1");
const databases2 = document.querySelector("#databases2");
const projman1 = document.querySelector("#projman1");
const projman2 = document.querySelector("#projman2");
const cSharp1 = document.querySelector("#cSharp1");
const cSharp2 = document.querySelector("#cSharp2");

// gets rid of any other sublinks if you were hovering over a different main link before moving onto this one
function clearLinks() {
    for (item of subnavLinks) {
        item.style.display = 'none';
    }
}
// iterate through main links
for (let item of navLinks) {
    item.addEventListener("mouseover", ()=> {
        // show subnav Container
        subnavContainer.style.display = "flex";
        // --- show sub links & adjust spacer depending which main link is hovered over ---
        if (item.textContent.trim() === 'Home') {
            clearLinks();
        } else if (item.textContent.trim() === 'Javascript') {
            subnavSpacer.style.width = '24.5%';
            clearLinks();
            javascript1.style.display = "flex";
            javascript2.style.display = "flex";
        } else if (item.textContent.trim() === 'JS DOM') {
            subnavSpacer.style.width = '35%';
            clearLinks();
            jsDom1.style.display = "flex";
            jsDom2.style.display = "flex";
        } else if (item.textContent.trim() === 'CSS') {
            subnavSpacer.style.width = '45.5%';
            clearLinks();
            css1.style.display = "flex";
            css2.style.display = "flex";
        } else if (item.textContent.trim() === 'Databases') {
            subnavSpacer.style.width = '56%';
            clearLinks();
            databases1.style.display = "flex";
            databases2.style.display = "flex";
        } else if (item.textContent.trim() === 'Project Management') {
            subnavSpacer.style.width = '67%';
            clearLinks();
            projman1.style.display = "flex";
            projman2.style.display = "flex";
        } else if (item.textContent.trim() === 'C#') {
            subnavSpacer.style.width = '78%';
            clearLinks();
            cSharp1.style.display = "flex";
            cSharp2.style.display = "flex";
        }
    })
    // console.log(item.textContent.trim())
    
}
// This make it so you can move the mouse from a main link to the subnav bar without it disappearing
subnavContainer.addEventListener("mouseover", ()=> {        
    subnavContainer.style.display = "flex";
})
// navbar vanishes when you move the mouse off it
subnavContainer.addEventListener("mouseout", ()=> {        
    subnavContainer.style.display = "none";
})
// This makes sure the subnav bar doesn't dissapear when you hover over a sub-link which it previously was for some reason
for (item of subnavLinks) {
    item.addEventListener("mouseover", ()=> {
        subnavContainer.style.display = "flex";
    })
}