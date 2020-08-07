// const Scene = require('../../models/scene');
// const Booking = require('../../models/booking');
// const { transformBooking, transformScene } = require('./merge');

module.exports = {
  bookings: async (args, req) => {
    // if (!req.isAuth) {
    //   throw new Error('Unauthenticated!');
    // }
    // try {
    //   const bookings = await Booking.find({user: req.userId});
    //   return bookings.map(booking => {
    //     return transformBooking(booking);
    //   });
    // } catch (err) {
    //   throw err;
    // }
  },
  bookScene: async (args, req) => {
  //   if (!req.isAuth) {
  //     throw new Error('Unauthenticated!');
  //   }
  //   const fetchedScene = await Scene.findOne({ _id: args.sceneId });
  //   const booking = new Booking({
  //     user: req.userId,
  //     scene: fetchedScene
  //   });
  //   const result = await booking.save();
  //   return transformBooking(result);
  // },
  // cancelBooking: async (args, req) => {
  //   if (!req.isAuth) {
  //     throw new Error('Unauthenticated!');
  //   }
  //   try {
  //     const booking = await Booking.findById(args.bookingId).populate('scene');
  //     const scene = transformScene(booking.scene);
  //     await Booking.deleteOne({ _id: args.bookingId });
  //     return scene;
  //   } catch (err) {
  //     throw err;
  //   }
  }
};
