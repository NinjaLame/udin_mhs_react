import axios from "axios";
// import fetch from "node-fetch";

export const LOGIN_URL = process.env.API_URL+"/auth";
export const REGISTER_URL = "api/auth/register";
export const REQUEST_PASSWORD_URL = "api/auth/forgot-password";



export const ME_URL = process.env.API_URL+"/student";

export async function login(email, password) {

  var fd = new FormData()
  fd.append('username',email);
  fd.append('password',password)
  return axios.post(LOGIN_URL, fd);
}

export function register(email, fullname, username, password) {
  return axios.post(REGISTER_URL, { email, fullname, username, password });
}

export function requestPassword(email) {
  return axios.post(REQUEST_PASSWORD_URL, { email });
}

export async function getUserByToken() {
  return axios.get(ME_URL);
}
