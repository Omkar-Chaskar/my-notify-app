import axios from "axios";
import toast from "react-hot-toast";

export const removeFromTrash = async (note , _id) => {
  try {
    const { data, status } = await axios({
      method: "delete",
      url: `/api/trash/delete/${_id}`,
      headers: { authorization: localStorage.getItem("auth_token") },
      data : { note }
    });
    return { data, status };
  } catch (err) {
    toast("Something went wrong: Remove from Trash Failed");
    console.error(err);
  }
};
