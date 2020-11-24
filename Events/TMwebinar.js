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
  console.log("chala");
  firebase.analytics();

//   REFERENCE MESSAGE COLLECTION


let messagesRef = firebase.firestore();

//   LISTEN TO FORM SUBMIT
document.getElementById('webinarForm-time').addEventListener('submit', submitForm);

// ON FORM SUBMIT
function submitForm(e) {
    e.preventDefault();
    console.log("chala");

    // Get values
    var name = getInputVal('name');
    var regNo = getInputVal('regNo');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var branch = getInputVal('branch');
    var year = getInputVal('year');
    var doubt = getInputVal('Doubts');

    console.log(name);
    // Save message
    saveMessage(name, regNo, email, phone, branch, year, doubt);
    // SHOW ALERT
    document.querySelector('.alert').style.display = 'block';
    document.querySelector('#webinarForm-time').style.display = 'none';

    setTimeout(function(){
        document.querySelector('.alert').style.display = 'none';
        document.querySelector('#webinarForm-time').style.display = 'flex';
    },3000);
    document.getElementById('webinarForm-time').reset();
}



function getInputVal(id) {
    return document.getElementById(id).value;
}
// SAVE MESSAGE TO FIREBASE

function saveMessage(name, regNo, email, phone, branch, year, doubt){


    // var newMessageRef = messagesRef.push();
    // newMessageRef.set({
    //     name: name,
    //     RegistrationNumber: regNo,
    //     Email: email,
    //     Phone: phone,
    //     Branch: branch,
    //     Year: year,
    //     Doubts: doubt
    // });

    messagesRef.collection("Messages").add({
        name: name,
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