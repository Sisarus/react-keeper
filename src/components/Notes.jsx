import Note from "./Note"

const Notes = ({notes, deleteNote}) => {

    return (
      <>
        {notes.map((n, id) =>
          <Note id={id} key={id} title={n.title} content={n.content} onDelete={deleteNote}/>
        )}
      </>
    );
  };

export default Notes
