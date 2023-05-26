import {styleNote, styleNoteP, iconButtonStyle, styleIcon} from "../styles/styles"
import { FaTrashAlt } from "react-icons/fa";

const Note = ({id, title, content, onDelete}) => {

    const handleClick = () => {
        onDelete(id)
    }

    return (
        <div className="shadow" style={styleNote}>
            <h3>{title}</h3>
            <p style={styleNoteP}>{content}</p>
            <button onClick={handleClick} style={iconButtonStyle}><FaTrashAlt style={styleIcon} /></button>
       </div> 
    )
}

export default Note