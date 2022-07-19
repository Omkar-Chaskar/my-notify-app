import axios from "axios";
import toast from "react-hot-toast";

export const archiveToTrash = async (note ,_id) => {
  try {
    const { data, status } = await axios({
      method: "post",
      url: `/api/archives/trash/${_id}`,
      headers: { authorization: localStorage.getItem("auth_token") },
      data : { note }
    });
    return { data, status };
  } catch (err) {
    toast("Something went wrong: Add to trash Failed");
    console.error(err);
  }
};
