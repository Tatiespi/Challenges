const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

// Define action creators
export const loginSuccess = (user) => {
  return { type: LOGIN_SUCCESS, payload: user };
};

export const logoutSuccess = () => {
  return { type: LOGOUT_SUCCESS };
};