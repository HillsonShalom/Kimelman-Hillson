import { Router } from "express";
import { create, editByName, getAll } from "../controllers/userController";

const router = Router()


router.get ('/', getAll)
router.post('/', create)
router.put ('/', editByName)







export default router