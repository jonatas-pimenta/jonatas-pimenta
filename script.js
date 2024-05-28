class Estudante {
    constructor(nome, email, ra, curso, disciplinas) {
        this.nome = nome;
        this.email = email;
        this.ra = ra;
        this.curso = curso;
        this.disciplinas = disciplinas;
    }

    primeiraDisciplina() {
        if (this.disciplinas.length > 0) {
            return this.disciplinas[0];
        }
        return null;
    }

    ultimaDisciplina() {
        if (this.disciplinas.length > 0) {
            return this.disciplinas[this.disciplinas.length - 1];
        }
        return null;
    }
}

const estudante1 = new Estudante("João Silva", "joao@example.com", "12345", "Engenharia", ["Matemática", "Física", "Química"]);
const estudante2 = new Estudante("Maria Souza", "maria@example.com", "67890", "Medicina", ["Biologia", "Anatomia", "Fisiologia"]);

function displayEstudante(estudante, elementId) {
    const estudanteElement = document.getElementById(elementId);
    estudanteElement.innerHTML = `
        <p><strong>Nome:</strong> ${estudante.nome}</p>
        <p><strong>Email:</strong> ${estudante.email}</p>
        <p><strong>RA:</strong> ${estudante.ra}</p>
        <p><strong>Curso:</strong> ${estudante.curso}</p>
        <p><strong>Primeira Disciplina:</strong> ${estudante.primeiraDisciplina()}</p>
        <p><strong>Última Disciplina:</strong> ${estudante.ultimaDisciplina()}</p>
    `;
}

displayEstudante(estudante1, 'estudante1');
displayEstudante(estudante2, 'estudante2');
