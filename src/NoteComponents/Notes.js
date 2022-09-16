import { v4 as uuid } from 'uuid';

import "../CSS/Note.css";
import React, { useState, useEffect } from 'react';
import CreateNote from './CreateNote';
import Note from './Note';

const Notes = () => {
    const [notes, setNotes] = useState([]);
    const [inputText, setInputText] = useState('');

    const textHandler = (e) => {
        setInputText(e.target.value);
    };

    const saveHandler = () => {
        setNotes((prevState) => [
            ...prevState,
            {
                id: uuid(),
                text: inputText,
            },
        ]);
        setInputText("");
    };

    const deleteNote = (id) => {
        const filteredNotes = notes.filter((note) => note.id !== id);
        setNotes(filteredNotes);
    };

    useEffect (() => {
        localStorage.setItem("Notes", JSON.stringify(notes));
    }, [notes]);

    useEffect (() => {
        const data = JSON.parse(localStorage.getItem("Notes"));
        if (data) {
            setNotes(data);
        }
    }, []);


  return (
    <div className='notes'>
         {notes.map((note) => (
        <Note 
            key={note.id}
            id={note.id}
            text={note.text}
            deleteNote={deleteNote}
        />
        ))}
        <CreateNote
            textHandler={textHandler}
            saveHandler={saveHandler}
            inputText={inputText} />
   
    </div>
  )
}

export default Notes