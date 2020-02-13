import axios from "axios";
// import fetch from "node-fetch";

export const INVOICE = process.env.API_URL+"/student/invoice";
export const HISTORY = process.env.API_URL+"/student/invoice/history";

export async function curInvoice() {
  return axios.get(INVOICE);
}

export async function invoiceHistory() {
    return axios.get(HISTORY);
}
   