import axios from "axios";
// import fetch from "node-fetch";

export const LOGIN_URL = "http://127.0.0.1:5000/auth";
export const REGISTER_URL = "api/auth/register";
export const REQUEST_PASSWORD_URL = "api/auth/forgot-password";



export const ME_URL = "http://127.0.0.1:5000/student";

export async function login(email, password) {
  // let response = await fetch("http://127.0.0.1:5000/auth", {
  //   mode : 'cors',
  //   header: {
  //       'Access-Control-Allow-Credentials': '*' ,
  //       'Access-Control-Allow-Methods': "*",
  //       'Access-Control-Allow-Origin': '*',
  //       'Access-Control-Allow-Headers': {'Access-Control-Allow-Methods': "*"},
  //     }
  //   });
  // let data = await response.json();
  // return data;

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
