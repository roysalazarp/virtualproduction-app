import "@babel/polyfill";
import authEndpoints from './authEndpoints';
import accessEnv from "./helpers/accessEnv";
const express = require('express');
const bodyParser = require('body-parser');
import "dotenv/config";

const isAuth = require('./middleware/is-auth');

const app = express();
const PORT = accessEnv("PORT", 7100);

app.use(bodyParser.json());


app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

app.use(isAuth);

authEndpoints(app);

app.use((err, req, res, next) => {
  return res.status(500).json({
    message: err.message
  });
});

app.listen(PORT, () => {
  console.info(`Users service listening on ${PORT}`);
});
