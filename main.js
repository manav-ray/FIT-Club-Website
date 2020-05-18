// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDcIhwmQTErvJGK_5zhs4YVLDHExMo3N_k",
    authDomain: "fit-club-contact.firebaseapp.com",
    databaseURL: "https://fit-club-contact.firebaseio.com",
    projectId: "fit-club-contact",
    storageBucket: "fit-club-contact.appspot.com",
    messagingSenderId: "38460809957",
    appId: "1:38460809957:web:d74659c75b9b4de7682a0c",
    measurementId: "G-KQXC8T86ZP"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var messagesRef = firebase.database().ref('messages');

document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();

    var name = getInputVal('name');
    var company = getInputVal('company');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');

    saveMessage(name, company, email, phone, message);

    document.querySelector('.alert').style.display = 'block';

    setTimeout(function() {
        document.querySelector('.alert').style.display = 'none';
    }, 3000);

    document.getElementById('contactForm').reset();

}

function getInputVal(id) {
    return document.getElementById(id).value;
}

function saveMessage(name, company, email, phone, message) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        company: company,
        email: email,
        phone: phone,
        message: message
    });
}