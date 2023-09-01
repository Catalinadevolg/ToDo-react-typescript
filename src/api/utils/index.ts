import axios from "axios";

export const API_ENDPOINT = "https://jsonplaceholder.typicode.com";

const options = {
  timeout: 5000,
};

export const api = axios.create({
  baseURL: API_ENDPOINT,
  ...options,
});
