import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { insertNote, getNotes, deleteNote } from "../Api/KpApi";
import Note from "./Note.jsx";
import CreateArea from "./CreateArea";
import uuid from "react-uuid";

function App() {
    const [item, setItem] = useState({ title: "", content: "" });
    const [noteList, setNote] = useState([]);

    function handleText(event) { //update constantly the data inserted on title and content
        const { value, name } = event.target;
        setItem(
            preValue => {
                return {
                    ...preValue,
                    [name]: value
                }
            }
        );
        event.preventDefault(); //prevent constantly update from the form tag
    }

    function displayNotes() { //get notes from DB and show up
        return [getNotes()
            .then(res => res.json())
            .then(data => setNote(data))]
    }

    function handleButton() {  // insert notes 
        insertNote({ "id": uuid(), ...item })
            .then(res => res.json())
            .then(
                setItem({ title: "", content: "" })
            )
    }

    function deleteNotes(id) { //delete notes using the id given by uuid
        deleteNote(id)
            .then(res => res.json())
            .then(console.log("delete process completed!!!"))
    }

    useEffect(() => {
        displayNotes()
    });

    return (
        <div>
            <Header />
            <CreateArea inputName="title" textAreaName="content" title={item.title} content={item.content} handleText={handleText} useButton={handleButton} />

            {noteList.map((note) => <Note key={note.id} id={note.id} title={note.title} content={note.content} deleteNote={deleteNotes} />)}

            <Footer />
        </div>

    );


}


export default App;