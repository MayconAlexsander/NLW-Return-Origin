window.addEventListener('scroll', onScroll)

onScroll()

function onScroll() {

  showNavOnScroll()
  showBackToTopButtonOnScroll()

  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
  
}

function activateMenuAtCurrentSection(section) {
  
  const target_line = scrollY + (innerHeight / 2)

  // Verificar se a seção passou da linha
  const section_top = section.offsetTop
  const section_height = section.offsetHeight
  const section_top_reach_or_passed_target_line = target_line >= section_top

  // Verificar se a base está abaixo da linha
  const section_ends_at = section_top + section_height
  const section_end_passed_target_line = section_ends_at <= target_line

  // Limites da seção
  const section_boundaries = section_top_reach_or_passed_target_line && !section_end_passed_target_line

  const section_id = section.getAttribute("id")
  const menu_element = document.querySelector(`.menu a[href*=${section_id}]`)

  menu_element.classList.remove("active")

  if (section_boundaries) {
    menu_element.classList.add("active")
  }

}

function showNavOnScroll() {

  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }

}

function showBackToTopButtonOnScroll() {

  if (scrollY > 550) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }

}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

// [Lib] ScrollReaveal
ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(`
  #home, 
  #home img, 
  #home .stats, 
  #services,
  #services header,
  #services .card
  #about, 
  #about header, 
  #about .content
`)