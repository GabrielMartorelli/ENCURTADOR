import axios from "axios";

// key 96cb9ab350ae1aaa6207a79cdad6d756854541bc

// base url https://api-ssl.bitly.com/v4/

export const key = "96cb9ab350ae1aaa6207a79cdad6d756854541bc";

const api = axios.create({
  baseURL: "https://api-ssl.bitly.com/v4",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${key}`,
  },
});

export default api;
