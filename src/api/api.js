import axios from "axios";

const api = axios.create({
  baseURL: "https://certificate-generator-backend.onrender.com/api", 
});

export default api;
