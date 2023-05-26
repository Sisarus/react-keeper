import { useState } from "react";
import CreateNote  from "./components/CreateNote";
import Notes from "./components/Notes";
import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header";
import {notesAreaBackgoundStyle} from "./styles/styles"

function App() {
  const [notes, setNotes] = useState([]);

  const addNote = (newNote) => {
    setNotes(prevNotes => {
      return[...prevNotes, newNote]
    })
  }

  const deleteNote = (id) =>{
    setNotes(prevNotes =>{
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      })
    })
  }

  return (
    <div style={notesAreaBackgoundStyle}>
    <Header/>
    <CreateNote onAdd={addNote} />
    <Notes notes={notes} deleteNote={deleteNote}/>
    <Footer />
    </div>
  );
}

export default App;
