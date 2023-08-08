import axios,{
  AxiosError,
  AxiosResponse,
  AxiosInstance,
  InternalAxiosRequestConfig,
} from "axios";

// config
import { HOST_API_KEY } from '../config-global';
import ValidationError from '@/lib/exceptions/validationError';

/**
	 * Make request to IG API
	 * @param baseURL 
	 * @param url 
	 * @param agent 
	 * @param options 
	 */

interface ApiResponse<T> {
  data: T;
}

// ----------------------------------------------------------------------

const AUTH_TOKEN = 'your_auth_token';

const callApi = () => {

 const axiosInstance =  axios.create({
   baseURL: HOST_API_KEY,
   timeout: 12000,
   headers: {
       'Accept': 'application/vnd.GitHub.v3+json',
      //  config.headers['Authorization'] = 'Bearer ' + getToken(); 
       Authorization: 'Bearer YOUR_TOKEN' // AUTH_TOKEN
    },
    transformRequest: [
      (data) => {
        return JSON.stringify(data);
      },
    ],
    transformResponse: [
      (data) => {
        return JSON.parse(data);
      },
    ],
  });


  axiosInstance.interceptors.request.use(
  (config : InternalAxiosRequestConfig) => {

    if ("token") {
       // console.log('config================================ :>> ', config.);
    //  add authorization logic here
    config.headers['Authorization'] = 'Bearer ' ; // + getToken();
    config.withCredentials = true;
      // config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error : AxiosError | Error) => {
    return Promise.reject(error);
  }
);



axiosInstance.interceptors.response.use(
  (response) => {
    //  handle successful responses here
    return response.data;
  },

    (error:  AxiosError ) => {
      const { message,name,response,request,status } = error;
    const res = error?.response

    // Handle different types of errors such as (network, server, etc.)
    if (response) {
      console.error('Server Error:', response.status, response.data);

      switch (status) {
        case 401: {
            // "Login required"
            // Delete Token & Go To Login Page if you required.
            sessionStorage.removeItem("token")
            break;
        }
        case 403: {
          // "Permission denied"
          break;
        }
        case 404: {
          // "Invalid request"
          break;
        }
        case 500: {
          // "Server error"
          break;
        }
        default: {
          // "Unknown error occurred"
          break;
        }
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

  return axiosInstance;
}


export default callApi;
