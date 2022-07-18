import { createContext, useContext, useReducer , useEffect, useState} from "react"
import {reducer} from "../reducer/addNoteReducer"
import axios from "axios";
import { addNewNote, updateNote} from "../services";
import toast from "react-hot-toast";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";

const NotesContext = createContext()

const NotesProvider = ({children}) => {
  const navigateTo = useNavigate();
  const [notes , setNotes] = useState([]);
    const [state , dispatch] = useReducer(reducer , {
      title: "",
      content: "",
      color: "",
      label: [],
      priority: [],
      pin: false,
      date: dayjs().format("YYYY-MM-DD"),
    })

    useEffect(() => {
      (async () => {
        try {
          const { data } = await axios({
            method: "get",
            url: "/api/notes",
            headers: { authorization: localStorage.getItem("auth_token") }
          });
          setNotes(data.notes)
        } catch (err) {
          toast("Something went wrong: Loading Cart Failed");
          console.error(err);
        }
      })();
    }, [notes]);
  
    const addNewNoteHandler = async (note) => {
      const { data, status } = await addNewNote(note);
      if (status === 201) {
        setNotes(data.notes);
        toast("New note added succesfully");
        navigateTo("/");
      }
    };

    const updateNoteHandler = async (note, _id) => {
      const { data, status } = await updateNote(note, _id);
      if (status === 201) {
        setNotes(data.notes);
        toast("Note update succesfully");
        navigateTo("/");
      }
    };

    return (
      <NotesContext.Provider
        value={{notes, state ,dispatch ,addNewNoteHandler ,updateNoteHandler }}
      >
        {children}
      </NotesContext.Provider>
    );
}

const useNotes = () => useContext(NotesContext)
export {NotesProvider,useNotes}

