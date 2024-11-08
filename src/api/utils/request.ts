import { message } from "antd";
import axios from "axios";
import type { AxiosError, AxiosRequestConfig } from "axios";

// 基本響應格式
interface IBase<T = string | null> {
  data: T;
  code: number;
  message: string;
}

// 嵌套數據格式
interface INestedData {
  message: string;
  data?: string;
}

// 基本 URL 配置
const BASE_URL = "http://localhost:3000";
const request = axios.create({ baseURL: `${BASE_URL}` });

// 錯誤處理函數，將錯誤轉換為 AxiosError 格式
const handleErrorType = (error: Error): AxiosError<IBase<INestedData>> => {
  return error as AxiosError<IBase<INestedData>>;
};

// 請求攔截器，用於添加認證標頭
request.interceptors.request.use((config) => {
  const token = JSON.parse(localStorage.getItem("token") as string)?.data;
  if (token) {
    config.headers.Authorization = token;
  }

  return config;
});

// 響應攔截器，用於處理成功與錯誤響應
request.interceptors.response.use(
  (response) => {
    const data = response?.data as IBase<INestedData>;

    // 如果返回的 code 為 200，並且有消息，則顯示成功消息
    if (data.code === 200 && data.data?.message) {
      message.success(data.data.message);
    }

    return response;
  },
  (error) => {
    const { response } = handleErrorType(error) || {};
    // 顯示警告消息，當錯誤沒有明確消息時，顯示 "未知錯誤"
    message.error(response?.data?.message ?? "未知錯誤");
  }
);

// 發送請求函數
const makeRequest = async <T>(
  url: string,
  options?: AxiosRequestConfig
): Promise<IBase<T>> => {
  return (await request({ url, ...options })).data as IBase<T>;
};

export { BASE_URL, handleErrorType, makeRequest };
