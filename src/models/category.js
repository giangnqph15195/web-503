import mongoose,{Schema} from "mongoose";

const CategorySchema =  new Schema({
    name:{
        type:String,
        trim:true,
        required:true
    },
    image:{
        type: String,
        required: true
    },
    slug:{
        type:String,
        lowercase: true,
        unique:true
    }
}, { timestamps: true})
export default mongoose.model("Category", CategorySchema)