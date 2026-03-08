import { createContext,useEffect,useState } from "react";

export const NotesContext=createContext();

export const NotesProvider=({children})=>{
const[notes,setNotes]=useState([]);
const[selectNotes, setSelectedNotes]=useState(null);


useEffect(()=>{
    const savedNotes=JSON.parse(localStorage.getItem("notes"));

    if(storedNotes){
        setNotes(storedNotes);
    }
},[]);


useEffect(()=>{
    localStorage.setItem("notes",JSON.stringify(notes));
},[notes]);


const addNote=(text)=>{
    const newNote={
        id:Date.now(),
        text
    };
    setNotes([...notes, newNote])
};

return(
    <NotesContext.Provider
    value={{
        notes,
        addNote,
        selectNotes,
        setSelectedNotes
    }}>{children}</NotesContext.Provider>
)
}