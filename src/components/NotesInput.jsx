import{useContext,useRef,useEffect} from "react";

import {NotesContext} from "../context/NotesContext";

function NotesInput(){
  
    const{addNote} =useContext(NotesContext);
    const inputRef =useRef(null);


    useEffect(()=>{
        inputRef.current.focus();
    },[]);

    const handleAdd=()=>{
        const value=inputRef.current.value;

       if(!value) return;
       addNote(value);
       inputRef.current.value="";

    };
    return(
        <div>
            <input
            ref={inputRef}
            placeholder="Enter note"
            style={{
                width:"280px",
                height:"35px",
                padding:"6px"
            }}>
            </input>
            <button onClick={handleAdd}>AddNotes</button>
        </div>
    )
}
export default NotesInput