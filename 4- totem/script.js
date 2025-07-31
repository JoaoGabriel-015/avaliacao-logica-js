document.addEventListener("DOMContentLoaded", () => {
  const btnAcompanhamentos = document.getElementById("btnAcompanhamentos");
  const acompanContainer = document.getElementById("acompanhamentosContainer");
  const btnFinalizar = document.getElementById("btnFinalizar");
  const sanduicheSelect = document.getElementById("sanduiche");
  const pedidoResumo = document.getElementById("pedidoResumo");
  const totalMark = document.getElementById("total");

  
  btnAcompanhamentos.addEventListener("click", () => {
    if (acompanContainer.style.display === "none" || acompanContainer.style.display === "") {
      acompanContainer.style.display = "block";
    } else {
      acompanContainer.style.display = "none";
    }
  });

  
  acompanContainer.addEventListener("change", (event) => {
    const checkedBoxes = acompanContainer.querySelectorAll('input[type="checkbox"]:checked');
    if (checkedBoxes.length > 5) {
      event.target.checked = false; 
      alert("Você só pode selecionar até 5 acompanhamentos.");
    }
  });

  
  btnFinalizar.addEventListener("click", () => {
    const sanduicheIndex = sanduicheSelect.selectedIndex;
    if (sanduicheIndex <= 0) {
      alert("Por favor, selecione um sanduíche.");
      return;
    }

    const sanduicheOption = sanduicheSelect.options[sanduicheIndex];
    const sanduicheNome = sanduicheOption.text;
    const sanduichePreco = parseFloat(sanduicheOption.getAttribute("data-preco"));

    
    const selecionados = Array.from(acompanContainer.querySelectorAll('input[type="checkbox"]:checked'))
      .map(cb => cb.value);

    const precoAcompanhamentos = selecionados.length * 2;

    const total = sanduichePreco + precoAcompanhamentos;

    
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
