import React from 'react'
import {AiFillDelete} from 'react-icons/ai'

function Notes({title ,content,onDelete,id}){
    return(
        <>
            <div className="note">
                <h1>{title}</h1>
                <p>{content}</p>
                <button onClick={()=>onDelete(id)}>
                    <AiFillDelete size={20} />
                </button>
            </div>
        </>
    );
}
export default Notes;