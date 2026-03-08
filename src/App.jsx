import { useContext,useMemo } from "react";
import { NotesContext } from "./context/NotesContext";
import NotesInput from "./components/NotesInput";
import NotesList from "./components/NotesList";

function App(){
 const{notes}=useContext(NotesContext);
 const totalNotes=useMemo(()=>{
  return notes.length;
 },[notes]);
 return(
  <div style={{
    paddingTop:"40px",
    paddingLeft:"40px"
  }}>
    <div 
    style={{
   display:"flex",
   alignItems:"center",
   gap:"40px"
    }}>
    <h1>Notes Dashboard</h1>
    <NotesInput/>
    </div>
    <h3>Total Notes:{totalNotes}</h3>
    <NotesList/>
  </div>
 )
};
 export default App;