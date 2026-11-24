import { Router } from "express";
import { atualizarCurso, buscarCursoPorId, criarCurso, listarCursos } from "../controller/cursos.controller";
import { validarCurso } from "../middlewares/validacao.middleware";

const cursosRouter = Router();

cursosRouter.get('/cursos', listarCursos);
cursosRouter.get("/cursos/:id", buscarCursoPorId);
cursosRouter.post("/cursos", validarCurso, criarCurso);
cursosRouter.put("/cursos/:id", validarCurso, atualizarCurso);

export default cursosRouter;