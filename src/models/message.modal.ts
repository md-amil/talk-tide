import mongoose, { Schema } from "mongoose";

const messageSchema = new Schema({
  text   : {
    type: String,
    required: true,
    default: "",
  },
  conversationId: {
    type: Schema.Types.ObjectId,
  },
  userId:{
    type : Schema.Types.ObjectId,
    default:""
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
