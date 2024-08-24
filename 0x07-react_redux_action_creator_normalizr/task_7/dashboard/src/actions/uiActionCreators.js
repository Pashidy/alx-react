import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from './uiActionTypes';
import fetch from 'node-fetch';

// Synchronous Action Creators
export const login = (email, password) => ({
  type: LOGIN,
  user: { email, password },
});

export const loginSuccess = () => ({
  type: LOGIN_SUCCESS,
});

export const loginFailure = () => ({
  type: LOGIN_FAILURE,
});

export const logout = () => ({
  type: LOGOUT,
});

// Async Action Creator for login request
export const loginRequest = (email, password) => {
  return (dispatch) => {
    // Dispatch the login action
    dispatch(login(email, password));

    // Fetch the API for login
    return fetch('/dist/login-success.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('API request failed');
        }
        return response.json();
      })
      .then((data) => {
        dispatch(loginSuccess());
      })
      .catch((error) => {
        dispatch(loginFailure());
      });
  };
};

