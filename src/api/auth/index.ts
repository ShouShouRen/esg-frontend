import { makeRequest } from "../utils/request";

export async function login(data: { username: string; password: string }) {
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
