document.querySelector("button").addEventListener("click", function () {
    const distancia = parseFloat(document.getElementById("distancia").value);
    const consumo = parseFloat(document.getElementById("consumo").value);
    const preco = parseFloat(document.getElementById("preco").value);
    const passageiros = parseInt(document.getElementById("passageiros").value);

    // Validação básica
    if (
        isNaN(distancia) || isNaN(consumo) || isNaN(preco) || isNaN(passageiros) ||
        distancia <= 0 || consumo <= 0 || preco <= 0 || passageiros <= 0
    ) {
        alert("Por favor, preencha todos os campos com valores válidos e maiores que zero.");
        return;
    }

    const litrosNecessarios = distancia / consumo;
    const custoTotal = litrosNecessarios * preco;
    const custoPorPessoa = custoTotal / passageiros;

    // Exibir resultados
    document.getElementById("resultado_gasolina_litros").textContent = litrosNecessarios.toFixed(2);
    document.getElementById("resultado_custo").textContent = "R$ " + custoTotal.toFixed(2);
    document.getElementById("resultado_custo_pessoa").textContent = "R$ " + custoPorPessoa.toFixed(2);
});
