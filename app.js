

// DARK MODE TOGGLE

const togglebtn = document.getElementById('dark-toggle');
const body = document.body;

togglebtn.onclick = () => {
    body.classList.toggle('light');
    body.classList.toggle('dark');
    if(body.classList == 'light'){
      console.log('hello');
      togglebtn.style.filter = "grayscale(0)";
    }
    else{
      togglebtn.style.filter = "grayscale(100)";
    }
};

//FORM POP UP BEGINS
// const popWindow_one = document.getElementById('mentor');
// const popWindow_two = document.getElementById('partner');
// const popWindow_three = document.getElementById('team');
// const bg_one = document.querySelector('.bg-modal');
// const bg_two = document.querySelector('.bg-modal2');
// const bg_three = document.querySelector('.bg-modal3');
// popWindow_one.onclick = () => {
//     bg_one.classList.toggle('show-form');
//     console.log('hello');
// };
// popWindow_two.onclick = () => {
//   bg_two.classList.toggle('show-form');
//   console.log('hello');
// };
// popWindow_three.onclick = () => {
//   bg_three.classList.toggle('show-form');
//   console.log('hello');
// };

// document.querySelector('.close').addEventListener('click', function(){
//   document.querySelector('.bg-modal').style.visibility = 'hidden';
//   document.querySelector('.bg-modal2').style.visibility = 'hidden';
//   document.querySelector('.bg-modal3').style.visibility = 'hidden';
// });

//FORM POP UP ENDS

//SWIPER JS CODE STARTS HERE
var mySwiper = new Swiper('.swiper-container', {
      
    slidesPerView: 4,
    spaceBetween: 50,
    loop: true,
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
      spaceBetween: 30,
      
    },
    1043: {
      slidesPerView: 3,
      spaceBetween: 30,
      
     
    },
    1117: {
      slidesPerView: 4,
      spaceBetween: 30,
      
    },
  }
});
//SWIPER JS CODE ENDS HERE

// PRELOADER BEGINS
window.addEventListener("load", setTimeout(function(){
  const loader = document.querySelector('.loader');
  loader.classList.add('loaded');
},2500));

// PRELOADER ENDS