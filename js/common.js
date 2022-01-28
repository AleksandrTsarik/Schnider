'use strick';

/////---slider swiper

new Swiper('.img-slider', {
   //navigation: {
   //    nextEl: '.swiper-button-next',
   //    prevEl: '.swiper-button-prev',
   // },
   loop: true,
   touchRation: 1,
   touchAngle: 45,
   grabCursor: true,
   slideToClickedSlide: true,
   keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
   },
   autoplay: {
      delay: 5000,
      disableOnInteraction: true,
   },
   speed: 800,
   // effect: 'cube',
   // cubeEffect: {
   //    slideShadows: false,
   //    shadow: false,
   // },
   //effect: 'flip',
   //effect: 'coverflow',
});

/////---date

function dateFormatter(date) {
   let dd = date.getDate();
   if (dd < 10) dd = '0' + dd;
   let mm = date.getMonth() + 1;
   if (mm < 10) mm = '0' + mm;
   let yy = date.getFullYear() % 100;
   if (yy < 10) yy = '0' + yy;

   return dd+'.'+mm+'.'+yy; 
};
let currentDay = new Date();     
let nextMondey = new Date();
let restDays = 7 - currentDay.getDay();
nextMondey.setDate(currentDay.getDate() + (restDays + 1))
console.log(dateFormatter(nextMondey)); 
document.querySelector('.js-date').innerHTML = dateFormatter(nextMondey);


/////---burder
const burger = document.querySelector('.burger');
   if(burger) {
      const menuBody = document.querySelector('.menu__body');
      burger.addEventListener('click', function(e){
         burger.classList.toggle('_active');
         menuBody.classList.toggle('_active');
      });
   }

