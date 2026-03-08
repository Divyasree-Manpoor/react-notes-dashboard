import{useContext,useRef,useEffect} from "react";

import {NotesContext} from "../context/NotesContext";

function NotesInput(){
  
    const{addNote} =useContext(NotesContext);
    const{inputRef}=useRef();


    useEffect(()=>{
        inputRef.current.focus();
    },[]);

    const handleAdd=()=>{
        const value=inputRef.current.value;

        if(value === "") return;
        addNote(value);
        inputRef.current.value="";
    };
    return(
        <div>
            <input
            ref={inputRef}
            placeholder="Enter note">
            </input>
            <button onClick={handleAdd}>AddNotes</button>
        </div>
    )
}
export default NotesInput