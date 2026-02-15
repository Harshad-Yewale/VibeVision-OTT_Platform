import axios from "axios";

import {
  loginFailure,
  loginStart,
  loginSuccess,
} from "./AuthActions";


// LOGIN

export const login = async (user, dispatch) => {

  dispatch(loginStart());

  try {

    const res = await axios.post("/api/auth/login", user);

    // only allow admin login (since this is admin panel)

    if (res.data.isAdmin) {

      dispatch(loginSuccess(res.data));

    } else {

      dispatch(loginFailure());

      alert("You are not an admin");

    }

  } catch (err) {

    dispatch(loginFailure());

    console.log(err);

  }

};


// LOGOUT

export const logoutUser = (dispatch) => {

  localStorage.removeItem("user");

  dispatch({ type: "LOGOUT" });

};
