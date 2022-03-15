import mongoose from "mongoose";

const productSchemna = mongoose.Schema({
    name: {
        type: String,
        required: true,
        monLength: 5
    },
    price: {
        type: Number,
        required: true,
        monLength: 5
    }
}, {timestamps: true})
export default mongoose.model("Product", productSchemna)