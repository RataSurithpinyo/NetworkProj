const mongoose = require("mongoose");

const chatSchema = mongoose.Schema(
  {
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    receiver:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    message: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

// retrieve a chat based on the unique identifiers of two users
// use the user_id_1 and user_id_2 values to retrieve the chat between the two users
chatSchema.statics.findChatByUser = async function (user_id_1, user_id_2) {
  let chat = null;
  chat = await this.findOne({
    sender: user_id_1,
    receiver: user_id_2,
  });
  if (!chat) {
    chat = await this.findOne({
      sender: user_id_2,
      receiver: user_id_1,
    });
  }
  return chat;
};

chatSchema.methods.isUserIn = function (userId) {
  return this.sender.equals(userId) || this.receiver.equals(userId);
};

module.exports = mongoose.model("Chat", chatSchema);