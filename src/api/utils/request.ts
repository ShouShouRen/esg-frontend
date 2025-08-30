import axios from "axios";
import type { AxiosError, AxiosRequestConfig } from "axios";

interface IBase<T = string | null> {
  data: T;
  code: number;
  message: string;
}

interface INestedData {
  message: string;
  data?: string;
}

const BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";
const request = axios.create({ baseURL: `${BASE_URL}`, timeout: 10000 });

const handleErrorType = (error: Error): AxiosError<IBase<INestedData>> => {
  return error as AxiosError<IBase<INestedData>>;
};

request.interceptors.request.use((config) => {
  let token: string | undefined;
  const raw = localStorage.getItem("token");
  if (raw) {
    try {
      const parsed = JSON.parse(raw);
      token = parsed?.data || parsed?.token || parsed;
    } catch {
      token = raw;
    }
  }
  if (token) {
    (config.headers as any).Authorization = token;
  }
  return config;
});

request.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

const makeRequest = async <T>(
  url: string,
  options?: AxiosRequestConfig
): Promise<IBase<T>> => {
  try {
    const response = await request({ url, ...options });
    return response.data as IBase<T>;
  } catch (error) {
    throw error;
  }
};

export { BASE_URL, handleErrorType, makeRequest };
