import mongoose, { Schema } from "mongoose";
import {createHmac} from 'crypto';

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
    role:{
        type: Number,
        default:0
    },
    password:{
        type: String,
        required: true,
        minLength:8
    }
}, {timestamps:true})

UserSchema.methods={
    authenticate(password){
        return this.password == this.encryptPass(password)
    },
    encryptPass(password){
        if(!password) return;
        try {
            return createHmac('sha256', "abc").update(password).digest('hex');
        } catch (error) {
            
        }
    }
}

// UserSchema.methods={
    
// } 
UserSchema.pre("save", async function save(next){
    try {
        this.password = this.encryptPass(this.password)
        return next(); 
    } catch (error) {
        
    }
})


export default mongoose.model("User", UserSchema)