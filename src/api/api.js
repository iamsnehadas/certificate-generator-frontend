import axios from "axios";

const api = axios.create({
  baseURL: "https://certificate-generator-backend-orcin.vercel.app/api/certificates", 
});

export default api;
