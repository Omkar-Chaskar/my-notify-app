import { createContext, useContext, useReducer} from "react"
import {reducer} from "../reducer/addNoteReducer"

const NotesContext = createContext()

const NotesProvider = ({children}) => {

    const [state , dispatch] = useReducer(reducer , {
      notes: [] ,
      archive: [] ,
      trash: [],
      pin: []
    });

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