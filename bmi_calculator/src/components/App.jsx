import React from 'react';
import { useState } from 'react';
import './app.css'

function App() {

  const [weight, setWeight] = useState(0)
  const [height, setHeight] = useState(0)
  const [bmi, setBmi] = useState('')
  const [message, setMessage] = useState('')

  let imgSrc = ""

  let calculateBMI = (event) =>{
    event.preventDefault()

    if(weight == 0 || height == 0){
      alert("Please enter a valid weight")
    }

  }

  return (
    <>
      <div className="app">
        <div className="container">
          <h2 className='center'>BMI Calculator</h2>
          <form>
            <div>
              <label>Weight</label>
              <input type="text" value={weight}/>
            </div>
            <div>
              <label>Height</label>
              <input type="text" value={height}/>
            </div>
            <div>
              <button className="btn" type="submit">Submit</button>
              {/* <button className="btn btn-outline" type="submit">Submit</button> */}
            </div>
          </form>
          
          <div className="result">
            <h3 className='center'>Your BMI is {bmi}</h3>
            <p>{message}</p>
          </div>

          <div className="imageContainer">
            <img src={imgSrc} alt='' />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
