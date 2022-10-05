import React from 'react';
import { useState } from 'react';
import {IoIosAdd} from 'react-icons/io'

function CreateArea({onAdd}){

    const [note, setNote] = useState({
        title:"",
        content:""
    });

    function handleChange(e){
        const{name,value} = e.target
        setNote(preValue =>{
            return{
                ...preValue,
                [name]:value
            }
        })
    }

    function submitButton(event){
        onAdd(note);
        setNote({
            title:"",
            content:""
        })
        event.preventDefault()
        
    }

    return(
        <div>
            <form>
                <input 
                    type="text" 
                    placeholder="Title..." 
                    name="title" 
                    value={note.title}
                    onChange={handleChange}
                    />
                <p>
                    <textarea 
                        name="content" 
                        placeholder="Take a note.." 
                        value={note.content} 
                        onChange={handleChange} >
                    </textarea>
                </p>
                <button onClick={submitButton}><IoIosAdd size={35} /></button>
            </form>
        </div>
    );
}

export default CreateArea