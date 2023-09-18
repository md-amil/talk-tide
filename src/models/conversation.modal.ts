import mongoose, { mongo } from "mongoose";

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

// videoSchema.methods.findBucket = function (cb: any) {
//     return cred.findById(this.bucket_id);
// };
const conversationModal = mongoose.model("Conversation", conversationSchema);
export default conversationModal

