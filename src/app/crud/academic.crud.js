import axios from "axios";
// import fetch from "node-fetch";

export const KRS = process.env.API_URL+"/student/krs";
export const KHS = process.env.API_URL+"/student/khs";
export const TRANSKRIP = process.env.API_URL+"/student/transkrip";
export const SCHEDULE = process.env.API_URL+"/student/schedule";

export async function transkripList() {
  return axios.get(TRANSKRIP);
}

export async function khsList() {
    return axios.get(KHS);
}


export async function krsList() {
    return axios.get(KRS);
}


export async function scheduleList() {
    return axios.get(SCHEDULE);
}