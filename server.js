import express from 'express'
import bodyParser from 'body-parser'
import helmet from 'helmet'
import errorHandler from "./src/middlewares/errorHandler";
import globalRouter from "./src/routes";

const PORT = process.env.PORT || '8080'

const app = express()

app.use(helmet())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))
app.use(globalRouter)
app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`Server run on localhost:${PORT}`)
})