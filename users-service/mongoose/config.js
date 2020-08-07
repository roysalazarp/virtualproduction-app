require("dotenv").config();

module.exports.development = {
  dialect: "mongoose",
  url: process.env.DB_URI
};
