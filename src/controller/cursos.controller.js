import { cursos } from "../dados/cursos";

export function listarCursos(req, res) {
    res.json(cursos);
}

export function buscarCursoPorId(req, res){
     const id = Number(req.params.id);
    const curso = cursos.find(c => c.id === id);
    if (!curso) {
        res.status(404).json({ error: "Curso não encontrado" });
    }
    res.json(curso);
}

export function criarCurso(req, res) {
    const { nome, cargaHoraria, nivel, preco, ativo } = req.body;
    const novo = {
        id: cursos.length ? cursos[cursos.length - 1].id + 1 : 1,
        nome, cargaHoraria, nivel, preco, ativo
    };
    cursos.push(novo);
    res.status(201).json(novo);
}

export function atualizarCurso(req, res) {
    const id = Number(req.params.id);
    const curso = cursos.find(c => c.id === id);
    if (!curso) {
        return res.status(404).json({ error: "Curso não encontrado" });
    } else {
        const { nome, cargaHoraria, nivel, preco, ativo } = req.body;
        curso.nome = nome;
        curso.cargaHoraria = cargaHoraria;
        curso.nivel = nivel;
        curso.preco = preco;
        curso.ativo = ativo;
        res.status(200).json(curso);
    }
}