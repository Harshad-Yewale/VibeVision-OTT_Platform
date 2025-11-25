import axios from "axios";
import { forgotPasswordFailure, forgotPasswordStart, forgotPasswordSuccess, loginFailure, loginStart, loginSuccess, resetPasswordFailure, resetPasswordStart, resetPasswordSuccess } from "./AuthActions";

export const login = async (user, dispatch) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure(err.response?.data?.error || "Login failed"));
    throw err.response.data.error;
  }
};
export const logout = async (user, dispatch) => {
  dispatch(logout());
  
};

export const forgotPassword = async (user, dispatch) => {
  dispatch(forgotPasswordStart());
  try {
    const res = await axios.post("auth/forgotPassword", user);
    dispatch(forgotPasswordSuccess(res.data));
  } catch (err) {
    dispatch(forgotPasswordFailure(err.response?.data?.error || "Forgot Password failed"));
    throw err.response.data.error;
  }
};

export const resetPassword = async (id,token,userData, dispatch) => {
  dispatch(resetPasswordStart());
  try {
    const res = await axios.post(`/auth/resetPassword/${id}/${token}`,userData);
    dispatch(resetPasswordSuccess(res.data));
    console.log("Password reset successful:", res.data);
  } catch (err) {
    console.error("Error resetting password:", err.response?.data?.error || err.message);
    dispatch(resetPasswordFailure(err.response?.data?.error || "Reset Password failed"));
    throw err.response?.data?.error || err.message;
  }
};
