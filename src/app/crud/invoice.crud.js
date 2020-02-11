import axios from "axios";
// import fetch from "node-fetch";

export const INVOICE = "http://127.0.0.1:5000/student/invoice";
export const HISTORY = "http://127.0.0.1:5000/student/invoice/history";

export async function curInvoice() {
  return axios.get(INVOICE);
}

export async function invoiceHistory() {
    return axios.get(HISTORY);
}
   