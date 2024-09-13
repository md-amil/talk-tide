import mongoose, { Schema } from "mongoose";

const messageSchema = new Schema({
  name: {
    type: String,
    required: true,
    default: "",
  },
  email:{
    type: String,
  },
  phone:{
    type :String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const UserModal = mongoose.model("User", messageSchema);
export default UserModal
