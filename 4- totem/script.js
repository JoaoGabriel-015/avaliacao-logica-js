document.addEventListener("DOMContentLoaded", () => {
  const btnAcompanhamentos = document.getElementById("btnAcompanhamentos");
  const acompanContainer = document.getElementById("acompanhamentosContainer");
  const btnFinalizar = document.getElementById("btnFinalizar");
  const sanduicheSelect = document.getElementById("sanduiche");
  const pedidoResumo = document.getElementById("pedidoResumo");
  const totalMark = document.getElementById("total");

  // Mostrar/ocultar acompanhamentos
  btnAcompanhamentos.addEventListener("click", () => {
    if (acompanContainer.style.display === "none" || acompanContainer.style.display === "") {
      acompanContainer.style.display = "block";
    } else {
      acompanContainer.style.display = "none";
    }
  });

  // Limite máximo de 5 acompanhamentos selecionados
  acompanContainer.addEventListener("change", (event) => {
    const checkedBoxes = acompanContainer.querySelectorAll('input[type="checkbox"]:checked');
    if (checkedBoxes.length > 5) {
      event.target.checked = false; // desmarca checkbox extra
      alert("Você só pode selecionar até 5 acompanhamentos.");
    }
  });

  // Finalizar pedido e mostrar resumo
  btnFinalizar.addEventListener("click", () => {
    const sanduicheIndex = sanduicheSelect.selectedIndex;
    if (sanduicheIndex <= 0) {
      alert("Por favor, selecione um sanduíche.");
      return;
    }

    const sanduicheOption = sanduicheSelect.options[sanduicheIndex];
    const sanduicheNome = sanduicheOption.text;
    const sanduichePreco = parseFloat(sanduicheOption.getAttribute("data-preco"));

    // Pega acompanhamentos selecionados
    const selecionados = Array.from(acompanContainer.querySelectorAll('input[type="checkbox"]:checked'))
      .map(cb => cb.value);

    const precoAcompanhamentos = selecionados.length * 2;

    const total = sanduichePreco + precoAcompanhamentos;

    // Monta resumo do pedido
    let resumo = `Sanduíche: ${sanduicheNome}\n`;
    if (selecionados.length > 0) {
      resumo += `Acompanhamentos:\n - ${selecionados.join("\n - ")}\n`;
    } else {
      resumo += "Nenhum acompanhamento selecionado.\n";
    }

    pedidoResumo.textContent = resumo;
    totalMark.textContent = total.toFixed(2);
  });
});
