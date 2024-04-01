import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Invalid Email address");
            }
        }
    }, password: {
        type: String,
        required: true,
        unique: true,
        length: 8
    }
}, { timestamps: true })


export const Users = new mongoose.model('Users', userSchema)