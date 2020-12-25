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