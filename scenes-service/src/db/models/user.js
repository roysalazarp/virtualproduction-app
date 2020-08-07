const mongoose = require('mongoose');
// const { usersDbConnect } = require('../connection');
// usersDbConnect();

const Schema = mongoose.Schema;

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