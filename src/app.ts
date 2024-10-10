import exp from 'express'
import userRouter from './routes/userRoute'

import 'dotenv/config'
import { connection } from './config/database';
const _port = process.env.PORT;

const app = exp()

connection()

app.use(exp.json())
app.use('/users', userRouter)

app.listen(_port, () => {
    console.log(`Listening at port ${_port}...`);
})