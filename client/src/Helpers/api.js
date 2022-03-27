import { api, user } from "../config/config";
import axios from "axios";

const instance = axios.create({
  baseURL: api,
});

export async function createUser(payload) {
  const data = await instance.post(user, payload);
  return data?.data;
}
