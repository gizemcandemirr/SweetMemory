import mongoose from "mongoose"

const memorySchema = mongoose.Schema({

    title:String,
    description: String,
    name:String,
    creator:String,
    tag:[String],
    createdAt:{
        type:Date,
        default:new Date(),       
    },
    likeCount:{
        type:Number,
        default:0,
    }

});

const MemoryModal = mongoose.model("Tour", memorySchema);

export default MemoryModal;