// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBMZWBG0UYUZJi4n-dLoCASmrX0A0aYt0U",
    authDomain: "turing-sapiens.firebaseapp.com",
    databaseURL: "https://turing-sapiens.firebaseio.com",
    projectId: "turing-sapiens",
    storageBucket: "turing-sapiens.appspot.com",
    messagingSenderId: "1034929876031",
    appId: "1:1034929876031:web:c0511393bb0d998a169c8a",
    measurementId: "G-TTZBY7YC1X"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 
  firebase.analytics();

//   REFERENCE MESSAGE COLLECTION


let messagesRef = firebase.firestore();

//   LISTEN TO FORM SUBMIT
document.getElementById('webinarForm-time').addEventListener('submit', submitForm);

// ON FORM SUBMIT
function submitForm(e) {
    e.preventDefault();
    // Get values
    var name = getInputVal('name');
    var regNo = getInputVal('regNo');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var branch = getInputVal('branch');
    var doubt = getInputVal('Doubts');
    var MemberId = getInputVal('MemberId');
    var OrderId = getInputVal('order');

    // Save message
    saveMessage(name, regNo, email, phone, branch, doubt,MemberId, OrderId);    // SHOW ALERT
    document.querySelector('.alert').style.display = 'block';
    document.querySelector('#webinarForm-time').style.display = 'none';

    setTimeout(function(){
        document.querySelector('.alert').style.display = 'none';
        document.querySelector('#webinarForm-time').style.display = 'flex';
    },4000);
    document.getElementById('webinarForm-time').reset();
}



function getInputVal(id) {
    return document.getElementById(id).value;
}
// SAVE MESSAGE TO FIREBASE

function saveMessage(name, regNo, email, phone, branch,  doubt, MemberId, OrderId){

    messagesRef.collection("Web Dev Week").add({
        Name: name,
        RegistrationNumber: regNo,
        Email: email,
        Phone: phone,
        Branch: branch,
        Doubts: doubt,
        MemberId: MemberId,
        OrderId: OrderId
    })
        .then(function (docRef) {
            console.log("Document written");
        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        });
}

// MEMBER FORM MULTI-LEVEL BUTTON

const proceed = document.querySelector('.go-to-level');
const authenticate = document.querySelector('.go-to-Member');
const memberid = document.querySelector('.memberId');
const level2 = document.querySelector('.level-2');
console.log("FROM MEMBER FORM.JS")
proceed.onclick = () => {
  proceed.style.display = "none";
  authenticate.style.display = "none";
  level2.classList.add('visible');
};

authenticate.onclick = () => {
  proceed.style.display = "none";
  authenticate.style.display = "none";
    memberid.classList.add('visible');
}
