const hamburger = document.querySelector('.hamburger')
const closeMenu = document.querySelector('.close-menu')
const mobileNav = document.querySelector('.nav-links.mobile')


hamburger.addEventListener('click', ()=>{
    hamburger.classList.remove('active')
    closeMenu.classList.add('active')
    mobileNav.classList.add('active')
})

closeMenu.addEventListener('click', ()=>{
    hamburger.classList.add('active')
    closeMenu.classList.remove('active')
    mobileNav.classList.remove('active')
})