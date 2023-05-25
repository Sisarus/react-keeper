const Notes = () => {
    return (
        <div className="shadow" style={styleNote}>
            <h3>Note</h3>
            <p style={styleNoteP}>Content</p>
       </div> 
    )
}

export default Notes;

const styleNote = {
    backgoundColor: '#fff',
    borderRadius: '0.7rem',
    padding: '1rem',
    width: '10rem',
    margin: '2rem',
    float: 'left'
}


const styleNoteP = {
    fontSize: '1.1rem',
}