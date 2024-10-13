import { Router } from "express";
import { register } from "../controllers/authController";

const router = Router()

/**
 * @swagger
 * /auth:
 *   post:
 *     summary: Register a new user
 *     description: Creates a new user account
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - username
 *               - password
 *               - email
 *               - age
 *             properties:
 *               username:
 *                 type: string
 *                 example: johndoe
 *               password:
 *                 type: string
 *                 example: mySecurePassword
 *               email:
 *                 type: string
 *                 example: johndoe@example.com
 *     responses:
 *       201:
 *         description: User created successfully
 *       400:
 *         description: Invalid input
 */
router.post('/', register)

export default router