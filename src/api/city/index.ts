import { makeRequest } from "../utils";

export async function fetchCities() {
  return makeRequest<{
    code: number;
    data: { id: number; label: string; value: string }[];
  }>("/city", {
    method: "GET",
  });
}
