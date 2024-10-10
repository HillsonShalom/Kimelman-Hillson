import mongoose from "mongoose"

export const connection = async () => {
    const conString = process.env.CONNECTION_STRING
    mongoose.connect(conString!)
}