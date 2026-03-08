import {useContext} from "react";
import {NotesContext} from "../context/NotesContext";
import NotesItem from "./NotesItem";

function NotesList(){
    const {notes} =useContext(NotesContext);
    return(
        <div>
            {
                notes.map((note)=>(
                   <NotesItem
                   key={note.id}
                   note={note}
                   />
                ))
            }
        </div>
    )

}
export default NotesList;