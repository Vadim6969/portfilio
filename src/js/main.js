import './vendor/focus-visible.min.js';
import './_vars';
import 'inputmask/dist/inputmask';
import 'just-validate/dist/js/just-validate.min';
import {resizeContent} from './functions/resize';
import {scrollTo} from './functions/smooth-scroll';
import {disableScroll, enableScroll} from './functions/stop-scroll';

//disableScroll(fix) // fix -> class of element with position: fixed
const validateForms = (selector, rules,successModal, yaGoal) => {
new window.JustValidate(selector, {
  rules: rules,
  submitHandler: function (form){
    let formData = new FormData(form);
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function (){
      if(xhr.readyState === 4){
        if(xhr.status == 200){
          console.log('Ok)')
        }
      }
    }
    xhr.open('POST', 'mail.php', true);
    xhr.send(formData);
    form.reset();
  },

})
}
validateForms('.form', {tel: {required: true}}, '.thanksPopUp', 'sendGoal')

const mySwiper = new Swiper('.swiper-container', {
  slidesPerView: 3,
  spaceBetween: 30,
  direction: 'horizontal',
  centeredSliders: true,
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },

})

const btnLeft = document.querySelector('.btn-left');
const btnRight = document.querySelector('.btn-right')
btnLeft.addEventListener('mouseover', function(){
  this.classList.add('header__btn--left')
})
btnLeft.addEventListener('mouseout', function(){
  this.classList.remove('header__btn--left')
})
btnRight.addEventListener('mouseover', function(){
  this.classList.add('header__btn--right')
  btnLeft.classList.add('btn--active')
})
 btnRight.addEventListener('mouseout', function(){
   this.classList.remove('header__btn--right')
   btnLeft.classList.remove('btn--active')
})
const scrollHandler = () => {
  const menu = document.querySelector('.menu');
  const burgerMenu = document.querySelector('.menu-active__list');
  if(window.scrollY > 150){
    menu.classList.add('menu--fixed')
    burgerMenu.classList.add('scroll')
  } else{
    menu.classList.remove('menu--fixed')
    burgerMenu.classList.remove('scroll')
  }
}
window.addEventListener('scroll', scrollHandler)
// mask
const selector = document.querySelectorAll('input[type="tel"]')
let im = new Inputmask('+7 (999) 999-99-99');
im.mask(selector);

// burger

const burgerBtn = document.querySelector('.burger-menu');
const menu = document.querySelector('.menu-active__list');
const openMenu = () => {
  menu.classList.toggle('open');
}
burgerBtn.addEventListener('click' , openMenu);
