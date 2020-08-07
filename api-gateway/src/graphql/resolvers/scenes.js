// const Scene = require('../../models/scene');
// const User = require('../../models/user');

// const { transformScene } = require('./merge');

// module.exports = {
//   scenes: async () => {
//     try {
//       const scenes = await Scene.find();
//       return scenes.map(scene => {
//         return transformScene(scene);
//       });
//     } catch (err) {
//       throw err;
//     }
//   },
//   createScene: async (args, req) => {
//     if (!req.isAuth) {
//       throw new Error('Unauthenticated!');
//     }
//     const scene = new Scene({
//       title: args.sceneInput.title,
//       description: args.sceneInput.description,
//       price: +args.sceneInput.price,
//       creator: req.userId
//     });
//     let createdScene;
//     try {
//       const result = await scene.save();
//       createdScene = transformScene(result);
//       const creator = await User.findById(req.userId);

//       if (!creator) {
//         throw new Error('User not found.');
//       }
//       creator.createdScenes.push(scene);
//       await creator.save();

//       return createdScene;
//     } catch (err) {
//       console.log(err);
//       throw err;
//     }
//   }
// };

import got from "got";

module.exports = {
  scenes: async () => {
    const body = await got.get('http://localhost:7101').json();
    console.log(body)
    return body;
  },
  createScene: async (args, req) => {
    const title = args.sceneInput.title;
    const description = args.sceneInput.description;
    const price = +args.sceneInput.price;
    const sceneOwner = req.userId;
    const date = args.sceneInput.date;
    const authorization = req.isAuth;
    const body = await got.post('http://localhost:7101', { json: { title, description, price, authorization, sceneOwner, date } }).json();
    return body;
  }
};
