 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-analytics.js";
 import { getDatabase,ref,set,get,child } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-database.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyDY-9djuTAklWO9M1mX4vH08B_e-Ez3juQ",
   authDomain: "netron-3d6d6.firebaseapp.com",
   databaseURL: "https://netron-3d6d6-default-rtdb.firebaseio.com",
   projectId: "netron-3d6d6",
   storageBucket: "netron-3d6d6.appspot.com",
   messagingSenderId: "474599067135",
   appId: "1:474599067135:web:8bae6b3c02040613bf2bca",
   measurementId: "G-6V68XKQV5E"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);
 const db =getDatabase(app);
 document.getElementById("sub1").addEventListener('click', function (e) {
 e.preventDefault();
 
 var role = document.getElementById("roleDropdown").value;
 var yearValue = null; // Default year value for teachers.

 // If the selected role is "student," get the year value.
 if (role === "student") {
     var yearDropdown = document.querySelector("#studentYearDropdown select");
     yearValue = yearDropdown.value;
 }

 var userValue = document.getElementById("user1").value;
 var lastValue = document.getElementById("last1").value;
 var emailValue = document.getElementById("email1").value;
 var passValue = document.getElementById("pass1").value;

 // Create an object to store user data.
 var userData = {
     UserId: userValue,
     Name: lastValue,
     EmailId: emailValue,
     Password: passValue,
     Role: role,
     StudentYear: yearValue
 };

 // Store the data in Firebase.
 var dbRef = ref(db, 'user/' + userValue);

 set(dbRef, userData)
     .then(() => {
         console.log('Data successfully saved to Firebase');
     })
     .catch((error) => {
         console.error('Error saving data to Firebase:', error);
     });
});


 // Add an event listener to the role dropdown.
document.getElementById("roleDropdown").addEventListener("change", function () {
 var role = this.value; // Get the selected role.
 var studentYearDropdown = document.getElementById("studentYearDropdown");

 // If the selected role is "student," display the year dropdown; otherwise, hide it.
 if (role === "student") {
     studentYearDropdown.style.display = "block";
 } else {
     studentYearDropdown.style.display = "none";
 }
});
