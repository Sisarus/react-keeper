import { useState } from "react"
import {styleNote, mainButtonStyle, createNoteStyle} from "../styles/styles"

const CreateNote = ({onAdd}) => {
    const [note, setNote] = useState({
        title: '',
        content: '',
    })

    const handleChange = (e) => {
        const {name, value } = e.target
    
        setNote( prevNote => {
            return{
                ...prevNote,
                [name]: value
            }
        })
    }

    const submitNote = (e) => {
        e.preventDefault()

        onAdd(note)

        setNote({
            title: '',
            content: '',
        })
    }

    return(<div className="shadow" style={styleNote}>
            <form>
            <input
                name='title'
                placeholder="Title"
                onChange={handleChange}
                value={note.title}
                style={createNoteStyle}
            />
            <textarea
                name='content'
                placeholder="Take a note..."
                rows="3"
                onChange={handleChange}
                value={note.content}
                style={createNoteStyle}
            />
            <button onClick={submitNote} style={mainButtonStyle}>Add</button>
            </form>
        </div>
    )

}


export default CreateNote 