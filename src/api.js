export const API_BASE_URL = "https://67281907270bd0b975545491.mockapi.io/"; // 여기에 API 기본 URL을 설정하세요
export const API_URL = "https://67281907270bd0b975545491.mockapi.io";
const BASE_URL = "https://67281907270bd0b975545491.mockapi.io/user";

export const getUsers = async () => fetch(`${BASE_URL}`).then((res) => res.json());
export const getUserById = async (id) => fetch(`${BASE_URL}/${id}`).then((res) => res.json());
export const createUser = async (user) =>
  fetch(`${BASE_URL}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  }).then((res) => res.json());
export const updateUser = async (id, user) =>
  fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  }).then((res) => res.json());
export const deleteUser = async (id) =>
  fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });
