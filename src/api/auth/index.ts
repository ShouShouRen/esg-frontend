import { makeRequest } from "../utils/request";

export async function login(data: { email: string; password: string }) {
  return makeRequest<string>("/user/login", {
    data,
    method: "POST",
  });
}

export async function register(data: {
  username: string;
  password: string;
  email: string;
}) {
  return makeRequest<string>("/user/register", {
    data,
    method: "POST",
  });
}

export async function changePassword(data: {
  currentPassword: string;
  newPassword: string;
}) {
  return makeRequest<string>("/user/change-password", {
    data,
    method: "PUT", // 修正為 PUT 方法
  });
}
