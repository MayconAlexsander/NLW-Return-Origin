function onScroll() {

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