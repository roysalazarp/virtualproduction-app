const mongoose = require('mongoose');
const { usersDbConnect } = require('../connection');
const Schema = mongoose.Schema;
usersDbConnect();
const userSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  createdScenes: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Scene'
    }
  ]
});

module.exports = mongoose.model('User', userSchema);