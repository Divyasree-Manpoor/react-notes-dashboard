import { createContext,useEffect,useState } from "react";

export const NotesContext=createContext();

export const NotesProvider=({children})=>{
const[notes,setNotes]=useState([]);
const[selectedNote, setSelectedNote]=useState(null);


useEffect(()=>{
    const storedNotes=JSON.parse(localStorage.getItem("notes"));

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
        selectedNote,
        setSelectedNote
    }}>{children}
    </NotesContext.Provider>
);
};