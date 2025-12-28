import axios from "axios";

/**
 * Central Axios instance
 * - Timeout prevents hanging
 * - Proper error surface
 */
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 15000
});

api.interceptors.request.use((config) => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

api.interceptors.response.use(
  (res) => res,
  (err) => {
    console.error("API Error:", err.message);
    return Promise.reject(err);
  }
);

export default api;
