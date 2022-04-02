import mongoose, {Schema} from "mongoose";
const SizeShema = new Schema({
    name:{
        type: String
    },
    gia:{
        type: Number
    }

})
export default mongoose.model("Size", SizeShema)