import firebase from 'firebase/compat/app';

import 'firebase/compat/auth';

import 'firebase/compat/firestore';

const app = firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREASE_apiKey,
    authDomain: process.env.REACT_APP_FIREASE_authDomain,
    projectId: process.env.REACT_APP_FIREASE_projectId,
    storageBucket: process.env.REACT_APP_FIREASE_storageBucket,
    messagingSenderId: process.env.REACT_APP_FIREASE_messagingSenderId,
    appId: process.env.REACT_APP_FIREASE_appId
})

export const auth = app.auth()
export default app