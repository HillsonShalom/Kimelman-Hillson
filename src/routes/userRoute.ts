import { Router } from "express";
import { create, editByName, getAll } from "../controllers/userController";
import { verfy } from "../middlewares/authMiddle";

const router = Router()


router.get ('/', verfy, getAll)
router.post('/', create)
router.put ('/', editByName)







export default router