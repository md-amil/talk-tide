import mongoose, { Schema } from "mongoose";

const messageSchema = new Schema({
  title: {
    type: String,
    required: true,
    default: "",
  },
  conversationId: {
    type: Schema.Types.ObjectId,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// videoSchema.methods.findBucket = function (cb: any) {
//     return cred.findById(this.bucket_id);
// };
const MessageModal= mongoose.model("Message", messageSchema);
export default MessageModal
