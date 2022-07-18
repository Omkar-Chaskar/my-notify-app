import axios from "axios";
import toast from "react-hot-toast";

export const addNewNote = async (note) => {
  try {
    const { data, status } = await axios({
      method: "post",
      url: "/api/notes",
      headers: { authorization: localStorage.getItem("auth_token") },
      data: { note }  
    });
    return { data, status };
  } catch (err) {
    toast("Something went wrong: Add new note Failed");
    console.error(err);
  }
};