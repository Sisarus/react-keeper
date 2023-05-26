const Note = ({title, content}) => {
    return (
        <div className="shadow" style={styleNote}>
            <h3>{title}</h3>
            <p style={styleNoteP}>{content}</p>
       </div> 
    )
}

export default Note

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