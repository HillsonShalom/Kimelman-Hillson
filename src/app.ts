import exp from 'express'
import parser from 'cookie-parser'
import userRouter from './routes/userRoute'
import authRouter from './routes/authRoute'

import 'dotenv/config'
import { connection } from './config/database';
const _port = process.env.PORT;

const app = exp()

connection()

app.use(exp.json())
app.use(parser())
app.use('/auth' , authRouter)
app.use('/users', userRouter)

app.listen(_port, () => {
    console.log(`Listening at port ${_port}...`);
})