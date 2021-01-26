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
document.getElementById('webinarForm').addEventListener('submit', submitForm);

// ON FORM SUBMIT
function submitForm(e) {
    e.preventDefault();
    // Get values
    var name = getInputVal('name');
    var college = getInputVal('college');
    var regNo = getInputVal('regNo');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var branch = getInputVal('branch');
    var year = getInputVal('year');
    var doubt = getInputVal('Doubts');

    // Save message
    saveMessage(name, college, regNo, email, phone, branch, year, doubt);
    // SHOW ALERT
    document.querySelector('.alert').style.display = 'block';
    document.querySelector('#webinarForm-microsoft').style.display = 'none';

    setTimeout(function(){
        document.querySelector('.alert').style.display = 'none';
        document.querySelector('#webinarForm-microsoft').style.display = 'flex';
    },4000);
    document.getElementById('webinarForm-microsoft').reset();
}



function getInputVal(id) {
    return document.getElementById(id).value;
}
// SAVE MESSAGE TO FIREBASE

function saveMessage(name, college, regNo, email, phone, branch, year, doubt){

    messagesRef.collection("Profile Building Workshop").add({
        name: name,
        College: college,
        RegistrationNumber: regNo,
        Email: email,
        Phone: phone,
        Branch: branch,
        Year: year,
        Doubts: doubt
    })
        .then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        });
}
