import axios from "axios";
import toast from "react-hot-toast";

export const updateNote = async (note ,_id) => {
  try {
    const { data, status } = await axios({
      method: "post",
      url: `/api/notes/${_id}`,
      headers: { authorization: localStorage.getItem("auth_token") },
      data: { note }  
    });
    return { data, status };
  } catch (err) {
    toast("Something went wrong: update note Failed");
    console.error(err);
  }
};