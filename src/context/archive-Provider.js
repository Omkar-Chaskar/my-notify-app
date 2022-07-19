import { createContext, useContext, useEffect, useState} from "react"
import axios from "axios";
import { addToArchive, restoreArchive } from "../services";
import toast from "react-hot-toast";

const ArchiveContext = createContext()

const ArchiveProvider = ({children}) => {
  
  const [archive , setArchive] = useState([]);

    useEffect(() => {
      (async () => {
        try {
          const { data } = await axios({
            method: "get",
            url: "/api/archives",
            headers: { authorization: localStorage.getItem("auth_token") }
          });
          setArchive(data.archives)
        } catch (err) {
          toast("Something went wrong: Loading Archive Notes Failed");
          console.error(err);
        }
      })();
    }, [archive]);
  
    const addToArchiveHandler = async (note , _id) => {
      const { data, status } = await addToArchive(note , _id);
      if (status === 201) {
        setArchive(data.archives);
        toast("Note archived successfully");
      }
    };

    const restoreArchiveHandler = async (note, _id) => {
      const { data, status } = await restoreArchive(note, _id);
      if (status === 200) {
        setArchive(data.archives);
        toast("Note restore from archive successfully");
      }
    };

    return (
      <ArchiveContext.Provider
        value={{ archive , setArchive ,addToArchiveHandler ,restoreArchiveHandler }}
      >
        {children}
      </ArchiveContext.Provider>
    );
}

const useArchive = () => useContext(ArchiveContext)
export {ArchiveProvider,useArchive}

