import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";

const firebaseConfig = {
//   apiKey: "AIzaSyCybmXAUWgGDCMNQWvcRdaMgE31I1GkF8M",
//   authDomain: "log-in-authentication-ac1b6.firebaseapp.com",
//   projectId: "log-in-authentication-ac1b6",
//   storageBucket: "log-in-authentication-ac1b6.appspot.com",
//   messagingSenderId: "735126972855",
//   appId: "1:735126972855:web:b26c16bd1de14bf361e032",
//   measurementId: "G-3GKSESXV7S"
apiKey: "AIzaSyAjbCG_Q2hXl1Z80gbjFnFKJ1Kg_TUGTXo",
    authDomain: "tours-and-travels-39ad8.firebaseapp.com",
    projectId: "tours-and-travels-39ad8",
    storageBucket: "tours-and-travels-39ad8.appspot.com",
    messagingSenderId: "329807030922",
    appId: "1:329807030922:web:96a3027cdd6daacb111b73"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

const submitButton = document.getElementById("submit");

const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const main = document.getElementById("main");
const createacct = document.getElementById("create-acct")




var email, password;


submitButton.addEventListener("click", function() {
  email = emailInput.value;
  console.log(email);
  password = passwordInput.value;
  console.log(password);

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log("Success! Welcome back!");
      window.alert("Success! Welcome back!");
      location.href='index.html'
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("Error occurred. Try again.");
      window.alert("Error occurred. Try again.");
    });
});

signupButton.addEventListener("click", function() {
    main.style.display = "none";
    createacct.style.display = "block";
});


