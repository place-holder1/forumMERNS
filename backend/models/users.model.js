const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

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
}, { timestamps: true });

userSchema.plugin(uniqueValidator);
const User = mongoose.model('User', userSchema);

const threadSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "can't be blank"],
  },
  content: {
    type: String,
    required: [true, "can't be blank"],
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
}, { timestamps: true });

const Thread = mongoose.model('Thread', threadSchema);

const postSchema = new mongoose.Schema({
  content: {
    type: String,
    required: [true, "can't be blank"],
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  thread: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Thread',
    required: true,
  },
}, { timestamps: true });

const Post = mongoose.model('Post', postSchema);

const commentSchema = new mongoose.Schema({
  content: {
    type: String,
    required: [true, "can't be blank"],
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post',
    required: true,
  },
}, { timestamps: true });

const Comment = mongoose.model('Comment', commentSchema);

module.exports = { User, Thread, Post, Comment };
