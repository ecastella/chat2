import React from 'react';
import "../CSS/Note.css";

const Note = ({ deleteNote, id, text }) => {
  return (
    <div className="note">
        <div className='note__body'>{text}</div>
        <div className='note__footer' style={{ justifyContent: "flex-end" }}>
            <div className="note__delete" onClick={() => deleteNote(id)}> X </div>
        </div>
    </div>
  )
}

export default Note