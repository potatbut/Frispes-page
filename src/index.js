import './style/style.scss'

console.log('KJSDFH')

let menuBtn = document.querySelector('.header__menu-burger')
let menuList = document.querySelector('.header__menu')
let displayMenu = menuList.style.display = 'block'

console.log(displayMenu)


menuBtn.addEventListener('click', function () {
  menuList.style.display = !displayMenu
})
