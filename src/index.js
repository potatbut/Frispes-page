import "./import-jquery"
import "jquery-ui-dist/jquery-ui.js"
import "slick-carousel"
import 'slick-carousel/slick/slick.min';

import './style/style.scss'

let menuBtn = document.querySelector('.header__menu-burger')
let menuList = document.querySelector('.header__menu')

$(menuBtn).click(function() {
  if (!menuList.classList.contains("show")) {
    $(menuList).addClass("show")
  } else {
    $(menuList).removeClass("show")
  }
})

$('.hero-imageSlider').slick({
  arrows: false,
  dots: true,
})

$('.center').slick({
  centerMode: true,
  centerPadding: '0px',
  slidesToShow: 3, 
  dots: true,
  arrows: true,
  appendArrows:'.slider-arrows',
  prevArrow:'<span class="slider-arrow arrow__prev"></span>',
  nextArrow:'<span class="slider-arrow arrow__next"></span>',
})