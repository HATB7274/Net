
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";
  import { getDatabase,ref,set,child,get } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDY-9djuTAklWO9M1mX4vH08B_e-Ez3juQ",
    authDomain: "netron-3d6d6.firebaseapp.com",
    projectId: "netron-3d6d6",
    storageBucket: "netron-3d6d6.appspot.com",
    messagingSenderId: "474599067135",
    appId: "1:474599067135:web:8bae6b3c02040613bf2bca",
    measurementId: "G-6V68XKQV5E"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  const db=getDatabase(app);
  document.getElementById("submit1").addEventListener('click',function(e){
  set(ref(db,'user/'+document.getElementById("userid1").value),{
      userid:   document.getElementById('userid1').value,
      Name1:    document.getElementById("name1").value,
      Role1:    document.getElementById("roleDropdown").value,
      Studrole1:    document.getElementById("studentYearDropdown").value,
      email1:   document.getElementById("emailid1").value,
      password1:    document.getElementById("password1").value,
      
  });
})