import React from 'react';
// Firebase deps
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyBYsNielkC403yUP5SHy48U-dKcWCRUJl4",
  authDomain: "chatroom-745eb.firebaseapp.com",
  projectId: "chatroom-745eb",
  storageBucket: "chatroom-745eb.appspot.com",
  messagingSenderId: "821494201853",
  appId: "1:821494201853:web:65c4fcf4d098b8d47d6d94",
  measurementId: "G-N5R45CWCSS"
});

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hi</h1>
      </header>
    </div>
  );
}

export default App;
