const alunos = [];

const inputNome = document.getElementById('nome');
const inputPrimeiro = document.getElementById('primeiro');
const inputSegundo = document.getElementById('segundo');
const inputTerceiro = document.getElementById('terceiro');
const inputQuarto = document.getElementById('quarto');

const btnCadastrar = document.getElementById('btnCadastrar');
const btnRelatorio = document.getElementById('btnRelatorio');
const listaAlunos = document.getElementById('lista_alunos');

btnCadastrar.addEventListener('click', () => {
    const nome = inputNome.value.trim();
    const notas = [
        parseFloat(inputPrimeiro.value),
        parseFloat(inputSegundo.value),
        parseFloat(inputTerceiro.value),
        parseFloat(inputQuarto.value),
    ];

    if (!nome) {
        alert('Por favor, insira o nome do aluno.');
        return;
    }

    
    for (let i = 0; i < notas.length; i++) {
        if (isNaN(notas[i]) || notas[i] < 0 || notas[i] > 10) {
            alert(`Por favor, insira uma nota válida entre 0 e 10 para o ${i+1}º bimestre.`);
            return;
        }
    }

    
    const media = notas.reduce((acc, n) => acc + n, 0) / notas.length;

    
    let status = '';
    if (media >= 7) {
        status = 'Aprovado';
    } else if (media >= 4) {
        status = 'Em Recuperação';
    } else {
        status = 'Reprovado';
    }

    
    const alunoExistente = alunos.find(aluno => aluno.nome.toLowerCase() === nome.toLowerCase());
    if (alunoExistente) {
        alert('Aluno já cadastrado.');
        return;
    }

    
    alunos.push({ nome, notas, media, status });

    alert(`Aluno ${nome} cadastrado com sucesso! Status: ${status}`);

    
    inputNome.value = '';
    inputPrimeiro.value = '';
    inputSegundo.value = '';
    inputTerceiro.value = '';
    inputQuarto.value = '';
});

btnRelatorio.addEventListener('click', () => {
    if (alunos.length === 0) {
        alert('Nenhum aluno cadastrado.');
        return;
    }

    
    listaAlunos.innerHTML = '';

    
    alunos.sort((a, b) => a.nome.localeCompare(b.nome));

    alunos.forEach(aluno => {
        const li = document.createElement('li');
        li.textContent = `${aluno.nome} - ${aluno.status}`;
        listaAlunos.appendChild(li);
    });
});
