import { Request, Response } from "express";
import { iuser, User } from "../models/User";

export const getAll = async (
    req: Request,
    res: Response
) => {
    try {
        const userlist = await User.find({})
        res.status(200).json(userlist)
    } catch(err) {
        const error = err as Error
        console.error(error.message)
        res.status(400).send(error.message)
    }
}

export const editByName = async (
    req: Request<any, any, iuser>,
    res: Response
) => {
    try {
        // const id = req.params.id
        const identical = await User.findOne({ username: req.body.username })
        if (!identical) throw new Error('user dosn\'t exsist!')
        identical.password = req.body.password
        identical.email    = req.body.email
        identical.age      = req.body.age
        await identical.save()
        res.sendStatus(204)
    } catch(err) {
        const error = err as Error
        console.error(error.message)
        res.status(400).send(error.message)
    }
}

export const create = async (
    req: Request<any, any, iuser>,
    res: Response
) => {
    try {
        const user = new User(req.body)
        const creation = await user.save();
        res.status(201).json(creation)
    } catch(err) {
        const error = err as Error
        console.error(error.message)
        res.status(400).send(error.message)
    }
}