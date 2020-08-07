import got from "got";

import accessEnv from "../helpers/accessEnv";
const SCENES_SERVICE_URI = accessEnv("SCENES_SERVICE_URI");

export default class ScenesService {
  static async createScene({ description, title }) {
    const body = await got.post(SCENES_SERVICE_URI, { json: { description, title } }).json();
    return body;
  }

  static async fetchAllScenes() {
    const body = await got.get(SCENES_SERVICE_URI).json();
    return body;
  }
}
