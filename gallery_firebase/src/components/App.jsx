import React from 'react';
import { BrowserRouter,Route,Routes  } from 'react-router-dom'
import './App.css';
import Navbar from './Navbar'
import Upload from './Upload'
// import Photos from './Photos'
// import Progress from './Progress'
import Home from './Home'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className='container'>
          <Routes>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="upload" component = {Upload}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
