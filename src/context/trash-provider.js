import { createContext, useContext, useEffect, useState} from "react"
import axios from "axios";
import { trashNote, removeFromTrash, restoreFromTrash ,archiveToTrash } from "../services";
import toast from "react-hot-toast";

const TrashContext = createContext()

const TrashProvider = ({children}) => {
  
  const [trash , setTrash] = useState([]);

    useEffect(() => {
      (async () => {
        try {
          const { data } = await axios({
            method: "get",
            url: "/api/trash",
            headers: { authorization: localStorage.getItem("auth_token") }
          });
          setTrash(data.trash)
        } catch (err) {
          toast("Something went wrong: Loading Trash Notes Failed");
          console.error(err);
        }
      })();
    }, [trash]);
  
    const trashNoteHandler = async (note , _id) => {
      const { data, status } = await trashNote(note , _id);
      if (status === 201) {
        setTrash(data.trash);
        toast("Note is been removed");
      }
    };

    const archiveToTrashHandler = async (note ,_id) => {
      const { data, status } = await archiveToTrash(note ,_id);
      if (status === 201) {
        setTrash(data.trash);
        toast("Note is been removed");
      }
    };

    const removeFromTrashHandler = async (note ,_id) => {
      const { data, status } = await removeFromTrash(note ,_id);
      if (status === 200) {
        setTrash(data.trash);
        toast("Note is been removed");
      }
    };

    const restoreFromTrashHandler = async (note ,_id) => {
      const { data, status } = await restoreFromTrash(note ,_id);
      if (status === 200) {
        setTrash(data.trash);
        toast("Note restore successfull");
      }
    };

    return (
      <TrashContext.Provider
        value={{ trash , setTrash ,trashNoteHandler ,removeFromTrashHandler ,restoreFromTrashHandler ,archiveToTrashHandler}}
      >
        {children}
      </TrashContext.Provider>
    );
}

const useTrash = () => useContext(TrashContext)
export {TrashProvider , useTrash}

