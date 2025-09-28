import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.dreamsquarerealty.com", // your backend URL
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
