document.querySelector("button").addEventListener("click", function () {
    const alunosSemPcd = parseInt(document.getElementById("alunos").value);
    const alunosComPcd = parseInt(document.getElementById("alunos_pcd").value);

    if (isNaN(alunosSemPcd) || isNaN(alunosComPcd) || alunosSemPcd < 0 || alunosComPcd < 0) {
        alert("Por favor, insira valores válidos.");
        return;
    }

    const totalAlunos = alunosSemPcd + alunosComPcd;
    const percentualPcd = ((alunosComPcd / totalAlunos) * 100).toFixed(2);

    document.getElementById("total_alunos").textContent = totalAlunos;
    document.getElementById("percentual_pcd").textContent = percentualPcd;
});