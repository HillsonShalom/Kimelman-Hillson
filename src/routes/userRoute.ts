import { Router } from "express";
import { create, getAll } from "../controllers/userController";

const router = Router()


router.get ('/', getAll)
router.post('/', create)







export default router