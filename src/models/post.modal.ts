import mongoose, { Schema } from "mongoose";

const messageSchema = new Schema({
  title:{
    type: String,
    default: "",
  },
  text:{
    type: String,
    default: "",
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
const PostModal= mongoose.model("Post", messageSchema);
export default PostModal
