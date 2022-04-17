import { createContext, useContext, useReducer , useEffect} from "react"
import {reducer} from "../reducer/addNoteReducer"

const NotesContext = createContext()

const NotesProvider = ({children}) => {

    const [state , dispatch] = useReducer(reducer , {
      notes: [] ,
      archive: [] ,
      trash: [],
      pin: []
    } , () => {
      const localData = localStorage.getItem('NOTE_APP_DATA');
      return localData ? JSON.parse(localData) : {
        notes: [] ,
        archive: [] ,
        trash: [],
        pin: []
      }
    } );

    useEffect(()=> {
      localStorage.setItem('NOTE_APP_DATA',JSON.stringify(state))
    },[state])
    return (
      <NotesContext.Provider
        value={{ state ,dispatch }}
      >
        {children}
      </NotesContext.Provider>
    );
}

const useNotes = () => useContext(NotesContext)
export {NotesProvider,useNotes}