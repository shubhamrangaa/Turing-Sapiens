
// PRELOADER BEGINS
window.addEventListener("load", () => setTimeout(function(){
  const loader = document.querySelector('.loader');
  loader.classList.add('loaded');
},1000));

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





