// DARK MODE TOGGLE

const togglebtn = document.getElementById('dark-toggle');
const body = document.body;

togglebtn.onclick = () => {
    body.classList.toggle('light');
    body.classList.toggle('dark');
};

//SWIPER JS CODE STARTS HERE
var mySwiper = new Swiper('.swiper-container', {
      
    slidesPerView: 4,
    spaceBetween: 80,
    loop: true,
    navigation: {
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
},
    /*pagination: {
      //el: '.swiper-pagination',
      clickable: true,
    },*/
})
/*loop: true,

// If we need pagination
pagination: {
  el: '.swiper-pagination',
},

// Navigation arrows
navigation: {
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
},

// And if we need scrollbar
scrollbar: {
  el: '.swiper-scrollbar',
},*/

//SWIPER JS CODE ENDS HERE