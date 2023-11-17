// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBOgu-U49wmWGa3Ga3ROVqdJExmu7l6tkI",
    authDomain: "bistro-boss-a7f1a.firebaseapp.com",
    projectId: "bistro-boss-a7f1a",
    storageBucket: "bistro-boss-a7f1a.appspot.com",
    messagingSenderId: "85892432782",
    appId: "1:85892432782:web:010e7a1032a816d0dcdadf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);