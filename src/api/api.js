// src/api/api.js
import axios from "axios";

const api = axios.create({
  baseURL: "https://certificate-generator-backend.onrender.com/api/certificates", // Correct backend URL
});

export default api;
