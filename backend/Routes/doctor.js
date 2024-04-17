import { updateDoctor, deleteDoctor, getAllDoctor, getSingleDoctor } from "../Controllers/doctorController.js";
import express from "express";
import { authenticate, restrict } from "../auth/verifyToken.js";
import reviewRouter from "./review.js"

const router = express.Router();

//nested route
router.use('/:doctorId/reviews', reviewRouter)

router.get('/:id', getSingleDoctor)
router.get('/', getAllDoctor)
router.delete('/:id', authenticate, restrict(['doctor']), deleteDoctor)
router.put('/:id', authenticate, restrict(['doctor']), updateDoctor)

export default router;