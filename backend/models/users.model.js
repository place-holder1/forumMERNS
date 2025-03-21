import mongoose from 'mongoose';
// import uniqueValidator from 'mongoose-unique-validator';
// This does not exist, so do not care about this

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    lowercase: true,
    unique: true,
    required: [true, "can't be blank"],
    match: [/^[a-zA-Z0-9]+$/, 'is invalid'],
    index: true,
  },
  email: {
    type: String,
    required: [true, "can't be blank"],
    unique: true,
    match: [/.+@.+\..+/, 'is invalid'],
  },
  password: {
    type: String,
    required: [true, "can't be blank"],
  },
  bio: String,
  avatarUrl: String,
}, {
  timestamps: true // createdAt, updatedAt
});

// userSchema.plugin(uniqueValidator);
const User = mongoose.model('User', userSchema);
//users

export default User;