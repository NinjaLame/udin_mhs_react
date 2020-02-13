import axios from "axios";
// import fetch from "node-fetch";

export const SUPERVISING = process.env.API_URL+"/student/supervising";

export async function supervisingHistory() {
  return axios.get(SUPERVISING);
}

export async function supervisingPost(data) {
    const fd = new FormData();
    fd.append('topic', data.topic);
    fd.append('supervising_date', data.supervising_date);
    fd.append('question', data.question);
    fd.append('answer', data.answer);
    return axios.post(SUPERVISING,fd);
  }

   