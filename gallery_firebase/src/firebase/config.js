import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyB1-TfzoTWfiMiKHRP6z-UaGUARQaPkCqo",
    authDomain: "gallery-5b66d.firebaseapp.com",
    projectId: "gallery-5b66d",
    storageBucket: "gallery-5b66d.appspot.com",
    messagingSenderId: "621031652770",
    appId: "1:621031652770:web:328bff31190c2b9554c6fb"
}

export const firebaseui ={
    signInFlow:"popup",
    signInOptions:[
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.PhoneAuthProvider.PROVIDER_ID,
    ]
}
firebase.initializeApp(config);

export default firebase;