import {styleNote, styleNoteP, mainButtonStyle} from "../styles/styles"

const Note = ({id, title, content, onDelete}) => {

    const handleClick = () => {
        onDelete(id)
    }

    return (
        <div className="shadow" style={styleNote}>
            <h3>{title}</h3>
            <p style={styleNoteP}>{content}</p>
            <button onClick={handleClick} style={mainButtonStyle}>DELETE</button>
       </div> 
    )
}

export default Note