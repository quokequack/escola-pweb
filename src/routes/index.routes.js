import { Router } from "express";
import cursosRouter from "./cursos.routes";

const router = Router();
router.use('/cursos', cursosRouter);

export default router;