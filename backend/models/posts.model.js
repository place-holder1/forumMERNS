import mongoose from 'mongoose';
// import uniqueValidator from 'mongoose-unique-validator';
// This does not exist, so do not care about this

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    unique: true,
    required: [true, "can't be blank"],
    index: true,
  },
  body: {
    type: String,
    required: [true, "can't be blank"],
  },
  createdby: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  character: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
    default: [],
  },
  likes: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'User',
    default: [],
  },
  comments: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
    },
  ],
}, {
  timestamps: true // createdAt, updatedAt
});

// postSchema.plugin(uniqueValidator);
const Post = mongoose.model('Post', postSchema);
//posts

export default Post;