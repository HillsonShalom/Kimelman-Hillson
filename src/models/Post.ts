import mongoose, { Document, Schema } from "mongoose";

export interface ipost extends Document {

}

export const postSchema = new Schema<ipost>({

}, { timestamps: true })

export const Post = mongoose.model('Post', postSchema) 