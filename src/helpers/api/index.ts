import axios from "axios";

const fetchData = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

fetchData.interceptors.request.use(
  (config) => {
    const defaultParams = {
      api_key: import.meta.env.VITE_API_KEY,
      language: "en-US",
    };

    config.params = { ...defaultParams, ...config.params };

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default fetchData;
