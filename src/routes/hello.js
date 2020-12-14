import { Router } from 'express'
import {hello} from "../controller/hello";

const router = Router()

router.get('/', hello)

export default router