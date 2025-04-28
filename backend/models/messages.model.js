import mongoose from 'mongoose';


const messagesSchema = new mongoose.Schema({
  username: {
    type: String,
    index: true
  },
  message: {
    type: String,
  },
});

const Messages = mongoose.model('Messages', messagesSchema);

export default Messages;
