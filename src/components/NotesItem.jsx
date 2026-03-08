import {useContext} from "react";

import { NotesContext } from "../context/NotesContext";

function NotesItem({note}){
    const{selectedNote,setSelectedNote}=useContext(NotesContext);
    return(
        <div onClick={()=>setSelectedNote(note.id)}
        style={{
            border:"1px solid black",
            padding:"10px",
            marginTop:"10px",
            backgroundColor:selectedNote === note.id ? "yellow" : "white"
        }}
        >
            {note.text}
        </div>
    )
}
export default NotesItem;