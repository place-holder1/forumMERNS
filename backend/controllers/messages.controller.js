import Message from '../models/messages.model.js';

export const getMessages = async (req, res) => {
  try {
    const { chatRoom } = req.query;
    const messages = chatRoom
      ? await Message.find({ chatRoom }).sort({ timestamp: 1 })
      : await Message.find().sort({ timestamp: 1 });

    res.status(200).json({ success: true, data: messages });
  } catch (error) {
    console.error("Error fetching messages:", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

// Send a message
export const sendMessage = async (req, res) => {
  const { user, text, chatRoom } = req.body;

  if (!user || !text) {
    return res.status(400).json({ success: false, message: "Please provide a user and text" });
  }

  try {
    const newMessage = new Message({ user, text, chatRoom });
    await newMessage.save();
    res.status(201).json({ success: true, data: newMessage });
  } catch (error) {
    console.error("Error sending message:", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
