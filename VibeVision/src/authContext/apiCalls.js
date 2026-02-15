import API from "../api";

import {
  forgotPasswordFailure,
  forgotPasswordStart,
  forgotPasswordSuccess,
  loginFailure,
  loginStart,
  loginSuccess,
  resetPasswordFailure,
  resetPasswordStart,
  resetPasswordSuccess,
} from "./AuthActions";

export const login = async (user, dispatch) => {
  dispatch(loginStart());

  try {
    const res = await API.post("/auth/login", user);

    dispatch(loginSuccess(res.data));

  } catch (err) {

    const message =
      err.response?.data?.error || "Login failed";

    dispatch(loginFailure(message));

    throw message;
  }
};

export const forgotPassword = async (user, dispatch) => {

  dispatch(forgotPasswordStart());

  try {

    const res = await API.post("/auth/forgotPassword", user);

    dispatch(forgotPasswordSuccess(res.data));

  } catch (err) {

    const message =
      err.response?.data?.error || "Forgot Password failed";

    dispatch(forgotPasswordFailure(message));

    throw message;
  }
};

export const resetPassword = async (id, token, userData, dispatch) => {

  dispatch(resetPasswordStart());

  try {

    const res = await API.post(
      `/auth/resetPassword/${id}/${token}`,
      userData
    );

    dispatch(resetPasswordSuccess(res.data));

  } catch (err) {

    const message =
      err.response?.data?.error || "Reset Password failed";

    dispatch(resetPasswordFailure(message));

    throw message;
  }
};
