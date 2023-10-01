// // axios-config.js

// import axios from 'axios';

// const tmdbBaseURL = 'https://image.tmdb.org/t/p/w500'; // Base URL for movie poster images

// const axiosInstance = axios.create({
//   baseURL: 'https://api.themoviedb.org/3', // TMDb API base URL
// });

// axiosInstance.interceptors.request.use(
//   (config) => {
//     // Add your TMDb API key to the request headers
//     config.headers['Authorization'] = '95d9623074e3fd44965f1697794cc620';
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// export default{ axiosInstance,tmdbBaseURL};
// // axios-config.js

import axios from 'axios';


const axiosInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3', // TMDb API base URL
});

axiosInstance.interceptors.request.use(
  (config) => {
    // Add your TMDb API key to the request headers
    config.headers['Authorization'] = '95d9623074e3fd44965f1697794cc620';
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance; // Export the Axios instance and base URL
