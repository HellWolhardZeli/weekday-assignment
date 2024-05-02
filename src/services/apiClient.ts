import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";

// Define your base URL
const BASE_URL = "";

// Create an instance of axios with custom configurations
const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 5000, // Timeout after 5 seconds
  headers: {
    "Content-Type": "application/json",
    // Add any other common headers here
  },
});

// Define a type for the response data
interface ApiResponse<T> {
  data: T;
}

// Define a type for the error response
interface ApiError {
  message: string;
}

// Define a type for your API response
type ApiResult<T> = ApiResponse<T> | ApiError;

// Define your API client function
async function apiClient<T>(config: AxiosRequestConfig): Promise<ApiResult<T>> {
  try {
    const response: AxiosResponse<T> = await instance(config);
    return { data: response.data };
  } catch (error) {
    // Handle errors
    if (axios.isAxiosError(error)) {
      // Axios error
      const axiosError: AxiosError<ApiError> = error;
      return { message: axiosError.message };
    } else {
      // Other errors
      return { message: "An unexpected error occurred" };
    }
  }
}

export default apiClient;
