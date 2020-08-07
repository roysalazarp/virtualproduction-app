const User = require('./db/models/user');
const Scene = require('./db/models/scene');
const { transformScene } = require('./merge');
const  async = require('async');

const dbs = async () => {
  const usersDB = await User.find();
  console.log(usersDB);
  const scenesDB = await Scene.find();
  console.log(scenesDB);
}
const authEndpoints = app => {
  app.get('/', async (req, res) => {
    // try {
    //   dbs();
      // console.log(scenes.map(scene => {
      //   return transformScene(scene);
      // }));
      // scenes.map(scene => {
      //   return transformScene(scene);
      // });
    //   return
    // } catch (err) {
    //   throw err;
    // }
  });
  app.post('/', async (req, res) => {
    if (!req.body.authorization) {
      throw new Error('Unauthenticated!');
    }
    const scene = new Scene({
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,
      date: new Date(req.body.date),
      creator: req.body.sceneOwner,
    });
    try {
      let createdScene;
      const result = await scene.save();
      createdScene = await transformScene(result);
      const creator = await User.findById(req.body.sceneOwner);
      if (!req.body.sceneOwner) {
        throw new Error('User not found.');
      }
      await creator.createdScenes.push(scene);
      await creator.save();

      return res.send(createdScene);
    } catch (err) {
      console.log(err);
      throw err;
    }
  });
};

export default authEndpoints;
