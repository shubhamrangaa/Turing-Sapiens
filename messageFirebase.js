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


document.getElementById('messageForm').addEventListener('submit', submitForm);


function submitForm(e) {
    e.preventDefault();
    console.log("chala");

    // Get values
    var name = getInputVal('name');
    var email = getInputVal('email');
    var msg = getInputVal('message');


    // Save message
    saveDetails(name, email, msg);

    document.getElementById('messageForm').reset();

    // // Show alert
    // document.querySelector('.alert').style.display = 'block';

    // // Hide alert after 3 seconds
    // setTimeout(function(){
    //   document.querySelector('.alert').style.display = 'none';
    // },3000);

}


function getInputVal(id) {
    return document.getElementById(id).value;
}

function saveDetails(name, email, msg) {


    db.collection("Messages").add({
        name: name,
        email: email,
        message: msg
    })
        .then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        });
}
