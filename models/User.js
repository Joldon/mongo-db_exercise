const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Please add a name'],
    maxlength: [75, 'The name can be max 75 chars long']
  },
  surname: {
    type: String,
    required: [true, 'Please add a surname'],
    maxlength: [75, 'The surname can be max 75 chars long']
  },
  age: {
    type: Number
  }
});

// User --> users
// Movie --> movies
module.exports = mongoose.model('User', UserSchema);
