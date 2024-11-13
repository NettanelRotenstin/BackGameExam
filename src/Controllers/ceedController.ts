import { Router } from "express"
import { login, register } from "../Routes/userRouter"
import { ceedRouter } from "../Routes/ceedRouter"

const router = Router()

router.post('/ceed', ceedRouter )


export default router