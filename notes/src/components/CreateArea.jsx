import React from 'react';
import { useState } from 'react';

function CreateArea(props){

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

    function submitButton(i){
        i.preventDefault()
        console.log(i.target)
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
                <button onClick={submitButton}>Add</button>
            </form>
        </div>
    );
}

export default CreateArea