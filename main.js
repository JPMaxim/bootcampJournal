function setHeroHeight() {
    const hero = document.getElementById("heroContainer");
    const heroWidth = hero.offsetWidth;
    // console.log(heroWidth) // works
    let heroHeight = heroWidth * 0.666666666;
    let heroHeightStr = heroHeight.toString() + "px"
    hero.style.height = heroHeightStr;
}