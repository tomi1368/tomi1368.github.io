const menuBtn = document.querySelector(".nav-bar__burger"),
HamburgerButton = document.querySelector(".nav-bar__burger__span"),
nav = document.querySelector(".bar"),
menuNav = document.querySelector(".bar-ok"),
ocult = document.querySelector(".section-flex");

let showMenu = false;

menuBtn.addEventListener("click",()=>{
    if (!showMenu) {
        HamburgerButton.classList.add("open");
        nav.classList.add("open");
        menuNav.classList.add("open");
        ocult.classList.add("ocult");
        showMenu = true;
    } else {
        HamburgerButton.classList.remove("open");
        nav.classList.remove("open");
        menuNav.classList.remove("open");
        ocult.classList.remove("ocult");
        showMenu = false;
    }
})


if (window.innerWidth > 300){
    window.sr = ScrollReveal();
        sr.reveal(".projects-container", {
            duration: 2000,
            origin:"left",
            distance:"-100px"
        });
        sr.reveal(".move",{
            duration: 2000,
            origin:"right",
            distance:"-100px",
            reset:"true"
        })
        sr.reveal(".move2", {
            duration: 2000,
            origin:"left",
            distance:"-100px",
            reset:"true"
        })
        sr.reveal(".middle", {
            duration: 2000,
            origin:"top",
            distance:"-100px",
            reset:"true"
        })
}




