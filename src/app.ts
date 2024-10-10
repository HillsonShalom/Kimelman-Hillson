import exp from 'express'
import userRouter from './routes/userRoute'

import 'dotenv/config'
const _port = process.env.PORT;

const app = exp()

app.use('/users', userRouter)

app.listen(_port, () => {
    console.log(`Listening at port ${_port}...`);
})