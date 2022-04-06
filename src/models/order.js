import mongoose, {Schema} from "mongoose";

const OrderShema = new Schema ({
    name:{
        type: String
    },
    address: {
        type:String
    },
    phone:{
        type:Number
    },
    note:{
        type:String
    },
    status:{
        type:Number
    }
}, {timestamps:true})

export default mongoose.model("Order" , OrderShema)