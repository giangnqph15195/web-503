// import mongoose, {Schema, ObjectId} from "mongoose";

// const cardSchame = new Schema({
//     products:{
//         type: ObjectId,
//         ref:"Product"
//     },
//     user:{
//         type: ObjectId,
//         ref:"User"
//     },
//     quantiny: {
//         type: Number,
//         required: true
//     }
// }, {timestamps:true})


// export default mongoose.model("Card" , cardSchame)


import mongoose, {Schema, ObjectId} from "mongoose";
const cardSchame = new Schema({
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
export default mongoose.model("Card", cardSchame)