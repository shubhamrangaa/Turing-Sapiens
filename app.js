
// PRELOADER BEGINS
window.addEventListener("load", () => setTimeout(function(){
  const loader = document.querySelector('.loader');
  loader.classList.add('loaded');
},2500));

// PRELOADER ENDS

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
    590: {
      slidesPerView: 2,
      spaceBetween: 30,
      
    },
    800: {
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

