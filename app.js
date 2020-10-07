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
    spaceBetween: 50,
    loop: true,
    navigation: {
  nextEl:'.swiper-button-next',
  prevEl:'.swiper-button-prev',
},
 autoplay:true,
   
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: { 
    350:{
      slidesPerView: 1,
      spaceBetween: 50,
    },
    690: {
      slidesPerView: 2,
      spaceBetween: 50,
      
    },
    1043: {
      slidesPerView: 3,
      spaceBetween: 50,
      
     
    },
    1317: {
      slidesPerView: 4,
      spaceBetween: 50,
      
    },
  }
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