const DataLoader = require('dataloader');

const User = require('./db/models/user');
const Scene = require('./db/models/scene');
const { dateToString } = require('./helpers/date');

const sceneLoader = new DataLoader(sceneIds => {
  return scenes(sceneIds);
});

const userLoader = new DataLoader(async userIds => {
  const usersFound = await User.find({ _id: { $in: userIds } });
  console.log(usersFound);
  return usersFound;
});

const scenes = async sceneIds => {
  try {
    const scenes = await Scene.find({ _id: { $in: sceneIds } });
    scenes.sort((a, b) => {
      return (
        sceneIds.indexOf(a._id.toString()) - sceneIds.indexOf(b._id.toString())
      );
    });
    return scenes.map(scene => {
      return transformScene(scene);
    });
  } catch (err) {
    throw err;
  }
};

const singleScene = async sceneId => {
  try {
    const scene = await sceneLoader.load(sceneId.toString());
    return scene;
  } catch (err) {
    throw err;
  }
};

const user = async userId => {
  try {
    const user = await userLoader.load(userId.toString());
    return user
    // console.log(`hola user ${userId}`);
    // return {
      // ...user._doc,
      // _id: user.id,
      // createdScenes: () => sceneLoader.loadMany(user._doc.createdScenes)
    // };
  } catch (err) {
    throw err;
  }
};

const printHello = word => {
  return console.log(word);
}

const transformScene = scene => {
  return {
    ...scene._doc,
    _id: scene.id,
    date: dateToString(scene._doc.date),
    // creator: printHello("hey")
    creator: user(scene.creator)
  };
};

const transformBooking = booking => {
  return {
    ...booking._doc,
    _id: booking.id,
    user: user.bind(this, booking._doc.user),
    scene: singleScene.bind(this, booking._doc.scene),
    createdAt: dateToString(booking._doc.createdAt),
    updatedAt: dateToString(booking._doc.updatedAt)
  };
};

exports.transformScene = transformScene;
exports.transformBooking = transformBooking;

// exports.user = user;
// exports.scenes = scenes;
// exports.singleScene = singleScene;
