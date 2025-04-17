import mongoose from 'mongoose';
// import uniqueValidator from 'mongoose-unique-validator';
// This does not exist, so do not care about this

const postSchema = new mongoose.Schema({
  postID: {
    type: String,
    lowercase: true,
    unique: true,
    required: [true, "can't be blank"],
    match: [/^[a-zA-Z0-9]+$/, 'is invalid'],
    index: true,
  },
  post: {
    type: String,
    required: [true, "can't be blank"],
  },
  password: {
    type: String,
    required: [true, "can't be blank"],
  },
}, {
  timestamps: true // createdAt, updatedAt
});

// userSchema.plugin(uniqueValidator);
const Post = mongoose.model('Post', postSchema);
//users

export default Post;