const FULL_DASH_ARRAY = 283;
const WARNING_THRESHOLD = 10;
const ALERT_THRESHOLD = 5;

const modal_container = document.getElementById('modal_container');

const COLOR_CODES = {
  info: {
    color: "green"
  },
  warning: {
    color: "green",
    threshold: WARNING_THRESHOLD
  },
  alert: {
    color: "green",
    threshold: ALERT_THRESHOLD
  }
};

const TIME_LIMIT = 5;
let timePassed = 0;
let timeLeft = TIME_LIMIT;
let timerInterval = null;
let remainingPathColor = COLOR_CODES.info.color;


document.getElementById("timer124").innerHTML = `
<div class="base-timer">
  <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <g class="base-timer__circle">
      <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
      <path
        id="base-timer-path-remaining"
        stroke-dasharray="283"
        class="base-timer__path-remaining ${remainingPathColor}""
        d="
          M 50, 50
          m -45, 0
          a 45,45 0 1,0 90,0
          a 45,45 0 1,0 -90,0
        "
      ></path>
    </g>
  </svg>
  <span id="base-timer-label" class="base-timer__label">${formatTime(
    timeLeft
  )}</span>
</div>
`;

function onTimesUp() {
  window.location.replace("./index.html");
  clearInterval(timerInterval);
}

function startTimer() {
  timerInterval = setInterval(() => {
    timePassed = timePassed += 1;
    timeLeft = TIME_LIMIT - timePassed;
    document.getElementById("base-timer-label").innerHTML = formatTime(
      timeLeft
    );
    setCircleDasharray();
    setRemainingPathColor(timeLeft);

    if (timeLeft === 0) {
      onTimesUp();
    }
  }, 1000);
}

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  return `${seconds}`;
}

function setRemainingPathColor(timeLeft) {
  const { alert, warning, info } = COLOR_CODES;
  if (timeLeft <= alert.threshold) {
    document
      .getElementById("base-timer-path-remaining")
      .classList.remove(warning.color);
    document
      .getElementById("base-timer-path-remaining")
      .classList.add(alert.color);
  } else if (timeLeft <= warning.threshold) {
    document
      .getElementById("base-timer-path-remaining")
      .classList.remove(info.color);
    document
      .getElementById("base-timer-path-remaining")
      .classList.add(warning.color);
  }
}

function calculateTimeFraction() {
  const rawTimeFraction = timeLeft / TIME_LIMIT;
  return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
}

function setCircleDasharray() {
  const circleDasharray = `${(
    calculateTimeFraction() * FULL_DASH_ARRAY
  ).toFixed(0)} 283`;
  document
    .getElementById("base-timer-path-remaining")
    .setAttribute("stroke-dasharray", circleDasharray);
}



var firebaseConfig = {
    apiKey: "AIzaSyAIfXhwja-Omwaw6KaboTCRSTD5qb4ujyY",
    authDomain: "ts-hire.firebaseapp.com",
    databaseURL: "https://ts-hire.firebaseio.com",
    projectId: "ts-hire",
    storageBucket: "ts-hire.appspot.com",
    messagingSenderId: "1070156142324",
    appId: "1:1070156142324:web:0faf308666b31b710530a1",
    measurementId: "G-YMFW7TH0Y2"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
console.log("chala");

// Reference messages collection
var db = firebase.firestore();


document.getElementById('techTeamForm').addEventListener('submit', submitForm);


function submitForm(e){
  e.preventDefault();
  console.log("chala");

  // Get values
  var name = getInputVal('name');
  var regNo = getInputVal('regNo');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var branch = getInputVal('branch');
  var sec = getInputVal('section');
  var reason = getInputVal('reason');
  var skills = getInputVal('skills');
  var projects = getInputVal('projects');
  var pastExp = getInputVal('pastExp');
  var gitHub = getInputVal('gitHub');
  var linkedin = getInputVal('linkedin');


  // Save message
  saveDetails(name, regNo, email, phone, branch, sec, reason, skills, projects, pastExp, gitHub, linkedin);
  startTimer();
    modal_container.classList.add('show');

  // window.location.replace("./index.html");

  // // Show alert
  // document.querySelector('.alert').style.display = 'block';

  // // Hide alert after 3 seconds
  // setTimeout(function(){
  //   document.querySelector('.alert').style.display = 'none';
  // },3000);

}


function getInputVal(id){
  return document.getElementById(id).value;
}

function saveDetails(name, regNo, email, phone, branch, sec, reason, skills, projects, pastExp, gitHub, linkedin) {


	db.collection("TechTeam").add({
    	name: name,
	    regNo: regNo,
	    email:email,
	    phone:phone,
	    branch: branch,
	    sec: sec,
	    reason: reason,
	    skills: skills,
	    projects: projects,
	    pastExp: pastExp,
	    gitHub: gitHub,
	    linkedin: linkedin
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error adding document: ", error);
    
    window.location.replace("./TechForm.html");
});

	// database.ref('Mentors/' + regNo).set({
	// 	name: name,
	//     regNo: regNo,
	//     email:email,
	//     phone:phone,
	//     branch: branch,
	//     sec: sec,
	//     reason: reason,
	//     projects: projects,
	//     pastExp: pastExp,
	//     gitHub: gitHub,
	//     linkedin: linkedin
	// });
  // var newMentorRef = mentorRef.push();
  // newMentoreRef.set({
    
  // });
}
