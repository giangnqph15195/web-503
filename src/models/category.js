import mongoose,{Schema} from "mongoose";

const CategorySchema =  new Schema({
    name:{
        type:String,
        required:true
    },
    slug:{
        type:String,
        lowercase: true,
        unique:true,
        index:true
    }
}, { timestamps: true})
export default mongoose.model("Catrgory", CategorySchema)