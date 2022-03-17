import mongoose, {ObjectId} from "mongoose";

const productSchemna = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 5
    },
    slug:{
        type: String,
        required:true,
        lowercase:true,
        unique:true,
        index:true
    },
    price: {
        type: Number,
        required: true,
    },
    description:{
        type: String,
        required: true,
        minLength:5
    },
    category:{
        type:ObjectId,
        ref:"category"
    }
}, {timestamps: true})
export default mongoose.model("Product", productSchemna)