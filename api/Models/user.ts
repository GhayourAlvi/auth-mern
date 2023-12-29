import mongoose from 'mongoose'
const { Schema } = mongoose

const UserSchema = new Schema(
    {
        firstName: { type: String, trim: true ,required:true},
        lastName: { type: String, trim: true ,required:true},
        email: { type: String, trim: true ,required:true, unique: true},
        password: { type: String, trim: true ,required:true},
        // profileImage: { type: String, trim: true,default:null }
    },
    { timestamps: true }
);
const User=mongoose.model('UserProfile', UserSchema)
export default User;