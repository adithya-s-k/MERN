import React from 'react'
import './styles.css'

import Header from './components/Header'
import CreateArea from './components/CreateArea'
import Notes from './components/Notes'

function App() {
  return (
    <>
      <div>
        <Header />
        <CreateArea />
        <Notes />
      </div>
    </>
  );
}

export default App;
