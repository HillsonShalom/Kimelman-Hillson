import mongoose from "mongoose"

export const connection = async () => {
    try {
        const conString = process.env.CONNECTION_STRING
        mongoose.connect(conString!)
    } catch(err) {
        const error = err as Error
        console.error(error.message)
    }
}