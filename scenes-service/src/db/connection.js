const mongoose = require('mongoose');
import accessEnv from "../helpers/accessEnv";
const dotenv = require('dotenv');
dotenv.config()

const dbURI = accessEnv("DB_URI");

module.exports = {
  usersDbConnect: async () => {
    return await mongoose
      .connect(
        `mongodb://users-service-db/users-db`, { useNewUrlParser: true, useUnifiedTopology: true }
      )
      .then(() => {
        console.log('MongoDB users-service Connected...')
      })
      .catch(err => {
        console.log(err);
      });
  },
  scenesDbConnect: async () => {
    return await mongoose
      .connect(
        dbURI, { useNewUrlParser: true, useUnifiedTopology: true }
      )
      .then(() => {
        console.log('MongoDB scene-service Connected...')
      })
      .catch(err => {
        console.log(err);
      });
  },
}
