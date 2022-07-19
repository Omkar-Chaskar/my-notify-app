import axios from "axios";
import toast from "react-hot-toast";

export const restoreFromTrash = async (note ,_id) => {
  try {
    const { data, status } = await axios({
      method: "post",
      url: `/api/trash/restore/${_id}`,
      headers: { authorization: localStorage.getItem("auth_token") },
      data : { note }
    });
    return { data, status };
  } catch (err) {
    toast("Something went wrong: Restore Note Failed");
    console.error(err);
  }
};
