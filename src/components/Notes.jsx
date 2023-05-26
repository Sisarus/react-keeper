import Note from "./Note";
import notes from "./NoteList";

const Notes = () => {
    return (
        <>
        {notes.map(note =>  
            <Note key={note.id} title={note.title} content={note.content}/>
        )}
        </>
    )
}

export default Notes;
