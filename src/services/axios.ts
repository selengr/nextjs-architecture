import axios, { AxiosRequestConfig } from 'axios';
// config
import { HOST_API_KEY } from '../config-global';
import ValidationError from '@/lib/exceptions/validationError';

// ----------------------------------------------------------------------


const callApi = () => {

 const axiosInstance =  axios.create({
   baseURL: HOST_API_KEY,
   timeout: 12000,
   headers: {
       'Accept': 'application/vnd.GitHub.v3+json',
       // config.headers['Authorization'] = 'Bearer ' + getToken(); 
       Authorization: 'Bearer YOUR_TOKEN' // AUTH_TOKEN
    },
  });


  axiosInstance.interceptors.request.use(
  (config) => {
    //  add authorization logic here
    // config.headers['Authorization'] = 'Bearer ' + getToken();
    config.withCredentials = true;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);



axiosInstance.interceptors.response.use(
  (response) => {
    //  handle successful responses here
    return response.data;
  },
  (error) => {
    const res = error?.response
    // Handle different types of errors such as (network, server, etc.)
    if (error.response) {
      console.error('Server Error:', error.response.status, error.response.data);

      if (res.status === 401) {
        // Redirect to login or show unauthorized message
      } else if (res.status === 404) {
        // Show not found message
      } else if(res.status === 422) {
        throw new ValidationError(res.data.errors)
     }
       else {
        // Handle other server errors
      }

    } else if (error.request) {
      // Handle network errors
      console.error('Network Error:', error.message);
    } else {
      // Handle other errors
      console.error('Error:', error.message);
    }

    return Promise.reject(error);
  }
);
}


export default callApi;
