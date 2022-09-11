import React from 'react';
// Firebase deps
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import { useAuthState } from 'react-firebase-hooks/auth';
import { userCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyBYsNielkC403yUP5SHy48U-dKcWCRUJl4",
  authDomain: "chatroom-745eb.firebaseapp.com",
  projectId: "chatroom-745eb",
  storageBucket: "chatroom-745eb.appspot.com",
  messagingSenderId: "821494201853",
  appId: "1:821494201853:web:65c4fcf4d098b8d47d6d94",
  measurementId: "G-N5R45CWCSS"
});

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {

  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header>
        <h1>⚛️🔥💬</h1>
        <SignOut />
      </header>

      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>

    </div>
  );
}


function SignIn(){
  
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }
  
  return(
    <button onClick={signInWithGoogle}>Sign in with google</button>
    );
  }

  function SignOut(){
    return auth.currentUser &&(
      <button onClick={()=>auth.signOut()} >Sign Out</button>
    );
  }
  
  function ChatRoom(){}
  
export default App;
