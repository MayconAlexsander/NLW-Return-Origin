onScroll()
window.addEventListener("scroll", onScroll)

function onScroll() {

    showNav()
    showBtnBackToTop()

}

function showNav() {
    
    if (scrollY > 0) {

        navigation.classList.add("scroll")

        document.querySelector(".logo-icon img")
        .classList.add("hidden")
        document.querySelector(".logo-icon")
        .innerHTML = `<img src="./assets/icons/on_scroll/logo.svg" alt="Logo">`
        
        document.querySelector(".menu-icon img")
        .classList.add("hidden")
        document.querySelector(".menu-icon")
        .innerHTML = `<img src="./assets/icons/on_scroll/burger-menu.svg" alt="Menu">`

    } else {
        navigation.classList.remove("scroll")

        document.querySelector(".logo-icon img")
        .classList.remove("hidden")
        document.querySelector(".logo-icon")
        .innerHTML = `<img src="./assets/icons/logo.svg" alt="Logo">`
        
        document.querySelector(".menu-icon img")
        .classList.remove("hidden")
        document.querySelector(".menu-icon")
        .innerHTML = `<img src="./assets/icons/burger-menu.svg" alt="Menu">`
    }

}

function showBtnBackToTop() {
        
    if (scrollY > 400) {
        btnBackToTop.classList.add("show")
    } else {
        btnBackToTop.classList.remove("show")
    }

}

function abrirMenu() {
    
    document.body.classList.add("menu-expandido")

    document.querySelector(".logo-icon img")
    .classList.add("hidden")
    document.querySelector(".logo-icon")
    .innerHTML = `<img src="./assets/icons/on_scroll/logo.svg" alt="Logo">`
        
}

function fecharMenu() {

    document.body.classList.remove("menu-expandido")

    document.querySelector(".logo-icon img")
    .classList.add("hidden")
    document.querySelector(".logo-icon")
    .innerHTML = `<img src="./assets/icons/logo.svg" alt="Logo">`

}



// [Lib] Scroll Reveal
ScrollReveal({
    origin: "top",
    distance: "30px",
    duration: 1500
}).reveal(`
    #home, 
    #home img, 
    #home .estatisticas,
    #servicos,
    #servicos header,
    #servicos .card,
    #sobre,
    #sobre header,
    #sobre .content
`);