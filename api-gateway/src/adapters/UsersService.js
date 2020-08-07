import got from "got";

import accessEnv from "../helpers/accessEnv";
const USERS_SERVICE_URI = accessEnv("USERS_SERVICE_URI");

export default class UsersService {
  static async createUser({ email, password, createUser }) {
    console.log({ email, password, createUser });
    const body = await got.post('http://localhost:7100', { json: { email, password, createUser } }).json();
    return body;
  }

  static async login({ email, password }) {
    const body = await got.post(USERS_SERVICE_URI, { json: { email, password } }).json();
    return body;
  }
}