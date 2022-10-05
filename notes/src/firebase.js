import firebase from 'firebase/app'
import 'firebase/auth'

const app = firebase.initializeApp({
    apiKey: "AIzaSyCHwkyXLD2bAwfg9FYPV2HDk1rOfKOfAGM",
    authDomain: "authdevelopment-33a33.firebaseapp.com",
    projectId: "authdevelopment-33a33",
    storageBucket: "authdevelopment-33a33.appspot.com",
    messagingSenderId: "6972236187",
    appId: "1:6972236187:web:f71d5e097b3fdd009c413e"
})

export const auth = app.auth()
export default app