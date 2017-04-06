const mongoose = require('mongoose');

const { Schema } = mongoose;
mongoose.Promise = global.Promise;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    minLength: [5, 'Username must be 5 characters or more'],
  },
  password: {
    type: String,
    required: true,
    minLength: [8, 'Password must be 8 characters or more'],
  },
  createdAt: { type: Date, default: Date.now },
  isDeleted: { type: Boolean, default: false },
});

// Write some encryption for password
const User = mongoose.model('User', userSchema);
module.exports = User;
