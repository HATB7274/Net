import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js";
import { getDatabase, ref, set, get } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-database.js";

// Firebase configuration
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
const auth = getAuth(app);
const db = getDatabase(app);

// Validation functions
function isValidUserId(userId) {
  // Require at least one uppercase letter, one lowercase letter, one number, and one special character, with a minimum length of 8 characters
  const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*\W).{8,}$/;
  return regex.test(userId);
}

function isValidEmail(email) {
  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isValidPassword(password) {
  // Require at least one uppercase letter, one lowercase letter, one number, and one special character, with a minimum length of 8 characters
  const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*\W).{8,}$/;
  return passwordRegex.test(password);
}

// ... Firebase configuration and initialization code (same as before)

// ... Firebase configuration and initialization code (same as before)

// Function to handle user registration
function registerUser(email, password, user, last, department, role, year) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Additional registration logic
      const userData = {
        UserId: user,
        Name: last,
        Department: department,
        Role: role,
        EmailId: email,
        Password:password,
      };

      if (role === "student") {
        userData.Year = year; // Include the selected year for students
      }

      const userRef = ref(db, 'users/' + userCredential.user.uid);
      set(userRef, userData)
        .then(() => {
          alert("Registration successful");
        })
        .catch((error) => {
          alert("Error saving user data: " + error.message);
        });
    })
    .catch((error) => {
      alert("Error during registration: " + error.message);
    });
}

// Event listener for the registration form
document.getElementById("sub1").addEventListener("click", (e) => {
  e.preventDefault();

  const email = document.getElementById("email1").value;
  const password = document.getElementById("pass1").value;
  const user = document.getElementById("user1").value;
  const last = document.getElementById("last1").value;
  const department = document.getElementById("departmentDropdown").value;
  const role = document.getElementById("roleDropdown").value;
  const year = document.getElementById("yearDropdown").value; // Get the selected year

  if (email && password && user && last && department && role) {
    // Validate user ID, email, and password before registration (you can add your validation functions)
    // Your validation logic here...

    if (role === "student" && year === "") {
      alert("Please select a year for student registration.");
      return;
    }

    // Register the user if all validations pass
    registerUser(email, password, user, last, department, role, year);
  } else {
    alert("Please fill in all required fields.");
  }
});

// Show/hide studentYearDropdown based on role selection
document.getElementById("roleDropdown").addEventListener("change", () => {
  const roleDropdown = document.getElementById("roleDropdown");
  const studentYearDropdown = document.getElementById("studentYearDropdown");
  if (roleDropdown.value === "student") {
    studentYearDropdown.style.display = "block";
  } else {
    studentYearDropdown.style.display = "none";
  }
});

// ... Existing code for registration and Firebase setup ...

// ... Existing code for registration and Firebase setup ...

// Function to handle user login and redirect
function loginUser(email, password, userId) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Fetch the user's data from the database based on the user's unique ID
      const userRef = ref(db, 'users/' + userCredential.user.uid);
      get(userRef)
        .then((snapshot) => {
          const userData = snapshot.val();
          if (userData && userData.UserId === userId) {
            alert("Login successful ! Now You Redirecting");
            // Redirect the user back to the original page after 2 seconds
            setTimeout(function() {
              window.location.replace(document.referrer);
            }, 2000);
          } else {
            alert("Login failed: Invalid User ID or credentials.");
          }
        })
        .catch((error) => {
          alert("Login failed: " + error.message);
        });
    })
    .catch((error) => {
      alert("Login failed: " + error.message);
    });
}

// Event listener for the login form
document.getElementById("loginBtn").addEventListener("click", (e) => {
  e.preventDefault();

  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-pass").value;
  const userId = document.getElementById("login-userid").value;

  if (email && password && userId) {
    // Log in the user if email, password, and user ID are provided
    loginUser(email, password, userId);
  } else {
    alert("Please enter your email, user ID, and password.");
  }
});
