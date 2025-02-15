import axios from "axios";
// import dotenv from "dotenv";
// dotenv.config({});
const apiClient = axios.create({
  baseURL: 'https://api.example.com/4000',
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
