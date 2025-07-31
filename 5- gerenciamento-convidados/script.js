const convidados = [];

const inputConvidado = document.getElementById('convidado');
const btnCadastrar = document.getElementById('btnCadastrar');
const btnRemover = document.getElementById('btnRemover');
const btnExibir = document.getElementById('btnExibir');
const listaConvidados = document.getElementById('lista_convidados');

btnCadastrar.addEventListener('click', () => {
    const nome = inputConvidado.value.trim();
    if (!nome) {
        alert('Por favor, insira um nome válido.');
        return;
    }
    if (convidados.length >= 10) {
        alert('A lista está cheia. Não é possível cadastrar mais convidados.');
        return;
    }
    if (convidados.includes(nome)) {
        alert('Este convidado já está cadastrado.');
        return;
    }
    convidados.push(nome);
    inputConvidado.value = '';
    alert(`Convidado "${nome}" cadastrado com sucesso!`);
    atualizarLista();
});

btnRemover.addEventListener('click', () => {
    if (convidados.length === 0) {
        alert('A lista está vazia. Não há convidados para remover.');
        return;
    }
    const nomeARemover = prompt('Digite o nome do convidado que deseja remover:');
    if (!nomeARemover || !nomeARemover.trim()) {
        alert('Nome inválido.');
        return;
    }
    const nomeFormatado = nomeARemover.trim();
    const index = convidados.indexOf(nomeFormatado);
    if (index === -1) {
        alert(`O convidado "${nomeFormatado}" não está na lista.`);
        return;
    }
    convidados.splice(index, 1);
    alert(`Convidado "${nomeFormatado}" removido com sucesso.`);
    atualizarLista();
});

btnExibir.addEventListener('click', () => {
    if (convidados.length === 0) {
        alert('A lista está vazia.');
        listaConvidados.innerHTML = '';
        return;
    }
    atualizarLista();
});

function atualizarLista() {
    convidados.sort((a, b) => a.localeCompare(b));
    listaConvidados.innerHTML = '';
    convidados.forEach((nome) => {
        const li = document.createElement('li');
        li.textContent = nome;
        listaConvidados.appendChild(li);
    });
}
