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

$('.imageSlider').slick({
  arrows: false,
  dots: true,
})

$( ".slick-slide" ).each(function( index ) { 
  $( this ).css('margin-top',
  ($('.slider').height()-$(this).height())/2+'px' );
});