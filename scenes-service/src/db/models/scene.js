const mongoose = require('mongoose');
// const { scenesDbConnect } = require('../connection');
// scenesDbConnect();
const Schema = mongoose.Schema;

const sceneSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  creator: {
      type: Schema.Types.ObjectId,
      ref: 'User'
  }
});

module.exports = mongoose.model('Scene', sceneSchema);