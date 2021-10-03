let config = {
  apiKey: "AIzaSyCmXF4B3IOI1pXg--a68Wft8G4ygp96gJg",
  authDomain: "static-naveen.firebaseapp.com",
  databaseURL: "https://static-naveen-default-rtdb.firebaseio.com",
  projectId: "static-naveen",
  storageBucket: "static-naveen.appspot.com",
  messagingSenderId: "337541769992",
  appId: "1:337541769992:web:096fce132e1d0c58a19abd"
};
firebase.initializeApp(config);
let formMessage = firebase.database().ref('responses');
let res = document.querySelector('#response');
document.querySelector('#contactForm').addEventListener('submit', formSubmit);
function formSubmit(e) {
  e.preventDefault();
  let name = document.querySelector('#name').value;
  let email = document.querySelector('#email').value;
  let phone = document.querySelector('#phone').value;
  let subject = document.querySelector('#subject').value;
  let message = document.querySelector('#message').value;
  sendMessage(name, email, phone, subject, message);
  document.querySelector('#contactForm').reset();
}
function sendMessage(name, email, phone, subject, message) {
  let newFormMessage = formMessage.push();
  newFormMessage.set({
    name: name,
    email: email,
    phone: phone,
    subject: subject,
    message: message
  });
  res.classList.remove('sent-message');
}