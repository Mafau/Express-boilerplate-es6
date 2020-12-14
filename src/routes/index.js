import { Router } from 'express'
import helloRoutes from './hello'

const globalRouter = Router()

globalRouter.use(helloRoutes)

export default globalRouter