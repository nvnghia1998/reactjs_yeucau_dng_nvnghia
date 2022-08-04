
import axios from 'axios';
const axiosApi = axios.create({
  baseURL: "https://api-meme-zendvn-01.herokuapp.com/api/v2",
  headers: {'content-type': 'application/json'}
});

// Add a request interceptor
// axiosApi.interceptors.request.use(function (config) {
//   // Do something before request is sent
//   return config;
// }, function (error) {
//   // Do something with request error
//   return Promise.reject(error);
// });

// Add a response interceptor
axiosApi.interceptors.response.use(function (response) {
  if(response && response.data) {
    return response.data;
  }
  return response;
}, function (error) {
  
  throw error;
});

export default axiosApi;