// import got from "got";

// module.exports = {
//   login: async ({ email, password }) => {
//     const login = true;
//     const body = await got.post('http://localhost:7100', { json: { email, password, login } }).json();
//     return body;
//   },
//   createUser: async args => {
//     const createUser = true;
//     const email = args.userInput.email;
//     const password = args.userInput.password;
//     const body = await got.post('http://localhost:7100', { json: { email, password, createUser } }).json();
//     return body;
//   }
// };

import UsersService from "../../adapters/UsersService";

module.exports = {
  login: async ({ email, password }) => {
    return await UsersService.login({ email, password });
  },
  createUser: async args => {
    const createUser = true;
    const email = args.userInput.email;
    const password = args.userInput.password;
    return await UsersService.createUser({ email, password, createUser });
  }
};