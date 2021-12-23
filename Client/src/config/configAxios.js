import axios from "axios";

export const ClientAxiosBack = axios.create({
  baseURL: "http://localhost:4000",
});
