import exp from 'express'
import parser from 'cookie-parser'
import swaggUi from 'swagger-ui-express'
import userRouter from './routes/userRoute'
import authRouter from './routes/authRoute'

import 'dotenv/config'
import { connection } from './config/database';
import { specs } from './services/swagger'
const _port = process.env.PORT;

const app = exp()

connection()

app.use(exp.json())
app.use(parser())

app.use('/api-docs', swaggUi.serve, swaggUi.setup(specs))

app.use('/auth' , authRouter)
app.use('/users', userRouter)

app.listen(_port, () => {
    console.log(`Listening at port ${_port}...`);
})