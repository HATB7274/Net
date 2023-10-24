import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-analytics.js";
  import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-database.js";
  

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

  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);

  const messageContainer = document.getElementById("message-container");

  function showMessage(message, isError = true) {
    messageContainer.textContent = message;
    messageContainer.style.backgroundColor = isError ? "#ff5555" : "#55ff55";
    messageContainer.style.display = "block";
    setTimeout(() => {
      messageContainer.style.display = "none";
    }, 3000);
  }

  document.getElementById("sub1").addEventListener('click', function (e) {
    e.preventDefault();

    const userValue = document.getElementById("user1").value;
    const lastValue = document.getElementById("last1").value;
    const emailValue = document.getElementById("email1").value;
    const passValue = document.getElementById("pass1").value;

    if (!userValue || !lastValue || !emailValue || !passValue) {
      showMessage("Please fill in all required fields.");
      return;
    }

    if (!isValidEmail(emailValue)) {
      showMessage("Please enter a valid email address.");
      return;
    }

    if (!isValidUserId(userValue)) {
      showMessage("User ID should contain uppercase, lowercase, numbers, and symbols.");
      return;
    }

    if (!isValidPassword(passValue)) {
      showMessage("Password should have at least 8 characters, including one uppercase letter, one lowercase letter, one number, and one special character.");
      return;
    }

    // Rest of your code to store data in Firebase
    const role = document.getElementById("roleDropdown").value;
    const yearDropdown = document.querySelector("#studentYearDropdown select");
    const yearValue = role === "student" ? yearDropdown.value : null;

    const userData = {
      UserId: userValue,
      Name: lastValue,
      EmailId: emailValue,
      Password: passValue,
      Role: role,
      StudentYear: yearValue
    };

    const dbRef = ref(db, 'user/' + userValue);

    set(dbRef, userData)
      .then(() => {
        showMessage("Data successfully saved to Firebase", false);
      })
      .catch((error) => {
        showMessage("Error saving data to Firebase: " + error);
      });
  });

  document.getElementById("roleDropdown").addEventListener("change", function () {
    const role = this.value;
    const studentYearDropdown = document.getElementById("studentYearDropdown");
    studentYearDropdown.style.display = role === "student" ? "block" : "none";
  });

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function isValidUserId(userId) {
    const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*\W).{8,}$/;
    return regex.test(userId);
  }

  function isValidPassword(password) {
    // Enhanced password format:
    const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*\W).{8,}$/;
    return regex.test(password);
  }