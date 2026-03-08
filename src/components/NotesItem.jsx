import {useContext} from "react";

import { NotesContext } from "../context/NotesContext";

function NotesItem({notes}){
    const{selectedNote,setSelectedNote}=useContext(NotesContext);
    return(
        <div onClick={()=>setSelectedNote(notes.id)}
        style={{
            border:"1px solid black",
            padding:"10px",
            marginTop:"10px",
            backgroundColor:selectedNote === notes.id ? "yellow" : "white"
        }}
        >
            {notes.text}
        </div>
    )
}
export default NotesItem;