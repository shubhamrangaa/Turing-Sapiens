// MEMBER FORM MULTI-LEVEL BUTTON

const proceed = document.querySelector('.go-to-level');
const level2 = document.querySelector('.level-2');
console.log("FROM MEMBER FORM.JS")
proceed.onclick = () => {
  proceed.classList.toggle('light');
  level2.classList.add('visible');
};

