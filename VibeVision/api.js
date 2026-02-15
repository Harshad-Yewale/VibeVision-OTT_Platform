import axios from "axios";

const API = axios.create({
  baseURL: "/api",
  timeout: 10000,
});

// Attach JWT automatically
API.interceptors.request.use(
  (config) => {

    const storedUser = localStorage.getItem("user");

    if (storedUser) {

      const user = JSON.parse(storedUser);

      if (user?.accessToken) {
        config.headers.token = `Bearer ${user.accessToken}`;
      }
    }

    return config;
  },

  (error) => Promise.reject(error)
);

export default API;
