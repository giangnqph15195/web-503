import mongoose, { Schema } from "mongoose";

const UserSchema =  new Schema({
    name:{
        type: String,
        required: true,
        minLength: 6
    },
    email:{
        type: String,
        required:true,
        minLength: 10
    },
    hash_pass:{
        type: String,
        required: true,
        minLength:8
    }
}, {timestamps:true})

export default mongoose.model("User", UserSchema)