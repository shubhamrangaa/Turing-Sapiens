

//FORM POP UP BEGINS
const popWindow_one = document.getElementById('mentor');
const popWindow_two = document.getElementById('partner');
const popWindow_three = document.getElementById('team');
const bg_one = document.querySelector('.bg-modal');
const bg_two = document.querySelector('.bg-modal2');
const bg_three = document.querySelector('.bg-modal3');
const closeform = document.querySelectorAll('.close');
popWindow_one.onclick = () => {
    bg_one.classList.toggle('show-form');
    
    console.log('hello');
};
popWindow_two.onclick = () => {
  bg_two.classList.toggle('show-form');
  console.log('hello');
};
popWindow_three.onclick = () => {
  bg_three.classList.toggle('show-form');
  console.log('hello');
};
var i = 0;
for(i=0; i<3; i++){

    closeform[i].onclick = () => {
      console.log("connected");
      if(bg_two.classList.contains("show-form")){
        console.log("connected")
        bg_two.classList.toggle('show-form');
      }
      if(bg_one.classList.contains("show-form")){
        console.log("connected")
        bg_one.classList.toggle('show-form');
      }
      if(bg_three.classList.contains("show-form")){
        console.log("connected")
        bg_three.classList.toggle('show-form');
      }
    };
}

//FORM POP UP ENDS