import axios from "axios";
import toast from "react-hot-toast";

export const restoreArchive = async (note , _id) => {
  try {
    const { data, status } = await axios({
      method: "post",
      url: `/api/archives/restore/${_id}`,
      headers: { authorization: localStorage.getItem("auth_token") },
      data: { note }  
    });
    return { data, status };
  } catch (err) {
    toast("Something went wrong: Restore from Archive Failed");
    console.error(err);
  }
};