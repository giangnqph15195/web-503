import mongoose, {Schema, ObjectId} from "mongoose";
const cartSchame = new  Schema({
    product:{
        type: ObjectId,
        ref:"Product"
    },
    user:{
        type: ObjectId,
        ref:"User"
    },
    quantiny: {
        type: Number,
        required: true
    }
}, {timestamps: true})
export default mongoose.model("Cart", cartSchame)