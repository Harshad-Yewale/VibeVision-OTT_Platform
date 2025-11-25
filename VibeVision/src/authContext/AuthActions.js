export const loginStart = () => ({
  type: "LOGIN_START",
});
export const loginSuccess = (user) => ({
  type: "LOGIN_SUCCESS",
  payload: user,
});
export const loginFailure = (error) => ({
  type: "LOGIN_FAILURE",
  payload:error,
});

//forgot password

export const forgotPasswordStart = () => ({
  type: "FORGOT_PASSWORD_START",
});
export const forgotPasswordSuccess = (user) => ({
  type: "FORGOT_PASSWORD_SUCCESS",
  payload: user,
});
export const forgotPasswordFailure = (error) => ({
  type: "FORGOT_PASSWORD_FAILURE",
  payload:error,
});

//reset password

export const resetPasswordStart = () => ({
  type: "RESET_PASSWORD_START",
});
export const resetPasswordSuccess = (user) => ({
  type: "RESET_PASSWORD_SUCCESS",
  payload: user,
});
export const resetPasswordFailure = (error) => ({
  type: "RESET_PASSWORD_FAILURE",
  payload:error,
});

//logout

export const logout = () => ({
  type: "LOGOUT",
});