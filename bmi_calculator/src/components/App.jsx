import React from 'react';
import { useState } from 'react';
import './app.css'

function App() {

  const [weight, setWeight] = useState(0)
  const [height, setHeight] = useState(0)
  const [bmi, setBmi] = useState('')
  const [message, setMessage] = useState('')


  let calculateBMI = (event) =>{
    event.preventDefault()

    if(weight === 0 || height === 0){
      alert("Please enter a valid weight")
    }
    else{
      let bmi = (weight /(height*height)*703)
      if(isNaN(bmi)){
        alert("Please enter a valid weight")
      }
      else{
        setBmi(bmi.toFixed(1))
        // Logic for message
        if(bmi < 25){
          setMessage("You are under weight")
        }else if(bmi >= 25 && bmi<30){
          setMessage("You are healthy weight")
        }else{
          setMessage("Your are over weight")
        }
      }
    }
  }

  let reload = () =>{
    window.location.reload()
  }

  return (
    <>
      <div className="app">
        <div className="container">
          <h2 className='center'>BMI Calculator</h2>
          <form onSubmit={calculateBMI}>
            <div>
              <label>Weight(lbs)</label>
              <input type="text" value={weight} onChange={(event)=> setWeight(event.target.value)} />
            </div>
            <div>
              <label>Height(inches)</label>
              <input type="text" value={height} onChange={(event)=> setHeight(event.target.value)} />
            </div>
            <div>
              <button className="btn" type="submit">Submit</button>
              <button className="btn btn-outline" onClick={reload} type="submit">Reload</button>
            </div>
          </form>
          
          <div className="result">
            <h3 className='center'>Your BMI is {bmi}</h3>
            <p className='center'>{message}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
