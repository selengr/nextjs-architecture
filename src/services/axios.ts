import axios, { AxiosRequestConfig } from 'axios';
// config
import { HOST_API_KEY } from '../config-global';
import ValidationError from '@/lib/exceptions/validationError';
import { AxiosError } from 'axios';

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

    (error: AxiosError) => {
      const { message,name,response,request,status } = error;
    const res = error?.response

    // Handle different types of errors such as (network, server, etc.)
    if (response) {
      console.error('Server Error:', response.status, response.data);

      if (response.status === 401) {
        // Redirect to login or show unauthorized message
      } else if (response.status === 404) {
        // Show not found message
      } else if(response.status === 422) {
        throw new ValidationError(message,name)
     }
       else {
        // Handle other server errors
      }

    } else if (request) {
      // Handle network errors
      console.error('Network Error:', message);
    } else {
      // Handle other errors
      console.error('Error:', message);
    }

    return Promise.reject(error);
  }
);
}


export default callApi;
