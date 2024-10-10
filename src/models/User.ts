import mongoose, { Document, Schema } from "mongoose";
import { ipost } from "./Post";

export interface iuser extends Document {
    username    : string;
    password: string;
    email   : string;
    age     : number;
    posts?   : ipost[];
}

const userSchema = new Schema<iuser>({
    username: {
        type    : String,
        required: [true, "name nust be provided"],
        unique  : true
    },
    password: {
        type: String,
        required: [true, "password nust be provided"]
    },
    email: {
        type: String,
        required: [true, "email nust be provided"]
    },
    age: {
        type: Number,
        max: 120,
        min: 0,
        required: [true, "age nust be provided"]
    },
    posts: {
        type: [Schema.Types.ObjectId],
        ref: 'Post',
        default: []
    }
}, { timestamps: true })

export const User = mongoose.model('User', userSchema)