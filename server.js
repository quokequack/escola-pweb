import express, { Router } from "express";
import { validarCurso } from "./src/middlewares/validacao.middleware.js";
import cursosRouter from "./src/routes/cursos.routes.js";

const router = Router();
router.use('/cursos', cursosRouter);

const app = express();

app.use(cursosRouter);
app.use(express.json());


const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
