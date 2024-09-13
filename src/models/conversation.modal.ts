import mongoose from "mongoose";

const conversationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        default:''
    },
    lastMessage:{
        type:String,
        default:'',
    },
    createdAt:{
        type: Date,
        default:Date.now
    }
})



const conversationModal = mongoose.model("Conversation", conversationSchema);
export default   conversationModal

