import axios from "axios";
import fetch from "node-fetch";

export const LOGIN_URL = "api/auth/login";
export const REGISTER_URL = "api/auth/register";
export const REQUEST_PASSWORD_URL = "api/auth/forgot-password";



export const ME_URL = "api/me";

export async function login(email, password) {
  // let response = await fetch("http://localhost:8808/api/auth/token?db=sia_siadin&login=0686.11.2011.406&password=a", {
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
  // return data;

  return axios.post(LOGIN_URL, { email, password });
}

export function register(email, fullname, username, password) {
  return axios.post(REGISTER_URL, { email, fullname, username, password });
}

export function requestPassword(email) {
  return axios.post(REQUEST_PASSWORD_URL, { email });
}

export function getUserByToken() {
  // Authorization head should be fulfilled in interceptor.
  return axios.get(ME_URL);
}
