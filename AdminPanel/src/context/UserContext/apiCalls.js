import axios from "axios";

import {
  deleteUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  getUsersFailure,
  getUsersStart,
  getUsersSuccess,
} from "./UserActions";


// helper to safely get token
const getToken = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return user ? "Bearer " + user.accessToken : "";
};



// GET USERS

export const getUsers = async (dispatch) => {

  dispatch(getUsersStart());

  try {

    const res = await axios.get("/api/users", {
      headers: {
        token: getToken(),
      },
    });

    console.log(res.data);

    dispatch(getUsersSuccess(res.data));

  } catch (err) {

    dispatch(getUsersFailure());

    console.log(err);

  }

};




// DELETE USER

export const deleteUser = async (id, dispatch) => {

  dispatch(deleteUserStart());

  try {

    await axios.delete("/api/users/" + id, {
      headers: {
        token: getToken(),
      },
    });

    dispatch(deleteUserSuccess(id));

  } catch (err) {

    dispatch(deleteUserFailure());

    console.log(err);

  }

};
