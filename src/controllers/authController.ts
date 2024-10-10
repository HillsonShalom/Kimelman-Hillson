import { Request, Response } from "express";
import { iuser, User } from "../models/User";
import jwt from 'jsonwebtoken'

export const register = async (
    req: Request<any, any, iuser>,
    res: Response
) => {
    try {
        const user = new User(req.body)
        const creation = await user.save();
//**************************************************************************** */
        const token = jwt.sign({
            username: creation.username,
            id      : creation._id
        }, process.env.SECRET_KEY!, { expiresIn: '1h' })
        res.cookie('token', token)
//**************************************************************************** */
        
        res.status(201).json(creation)
    } catch(err) {
        const error = err as Error
        console.error(error.message)
        res.status(400).send(error.message)
    }
}