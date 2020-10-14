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


document.getElementById('mentorForm').addEventListener('submit', submitForm);


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

   window.location.replace("./index.html");

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


	db.collection("Mentors").add({
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
