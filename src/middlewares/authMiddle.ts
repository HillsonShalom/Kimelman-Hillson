import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken'

interface itoken {
    username: string;
    id: string;
}

export const verfy = (
    req:  Request,
    res:  Response,
    next: NextFunction
) => {
    try {
        const token = req.cookies.token

        if (!token) throw new Error('nice try!');

        const checked = jwt.verify(token, process.env.SECRET_KEY!) as itoken

        // @ts-ignore
        req.user = checked

        next()
    } catch(err) {
        const error = err as Error
        console.error(error.message)
        res.status(401).send(error.message)
    }
    
}