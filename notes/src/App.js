import React, { useState } from 'react'
import './styles.css'

import Header from './components/Header'
import CreateArea from './components/CreateArea'
import Notes from './components/Notes'
import Count from './components/Count'



function App(props) {
  const [notes, setNotes] = useState([])

  function addNote(newNote){
    setNotes(prevValue=>{
      return[...prevValue,newNote];
    })
  }

  function deleteNote(id){
    setNotes(preValue=>{
      return[...preValue.filter((note,index)=>
        index !== id)]
    })
  }

  return (
    <>
      <div>
        <Header />
        <Count count={notes.length === 0? "Empty" : `showing ${notes.length} Notes in the database`}/>
        <CreateArea onAdd={addNote}/>
        <div className="mainArea">
          {notes.map((note,index)=>(
            <Notes 
              key={index} 
              id={index} 
              title={note.title} 
              content={note.content} 
              onDelete ={deleteNote}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
