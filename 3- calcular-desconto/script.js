document.getElementById("btnCalcular").addEventListener("click", function () {
  const vendaInput = document.getElementById("venda");
  const pagamentoSelect = document.getElementById("pagamento");

  const valorVenda = parseFloat(vendaInput.value);
  const formaPagamento = pagamentoSelect.value;

  if (isNaN(valorVenda) || valorVenda <= 0) {
    alert("Por favor, informe um valor válido para a venda.");
    return;
  }

  if (!formaPagamento) {
    alert("Por favor, selecione uma forma de pagamento.");
    return;
  }

  let desconto = 0;
  if (formaPagamento === "avista") {
    desconto = valorVenda * 0.05; 
  }

  const valorFinal = valorVenda - desconto;

  
  document.getElementById("valor_original").textContent = `R$ ${valorVenda.toFixed(2)}`;
  document.getElementById("valor_desconto").textContent = `R$ ${desconto.toFixed(2)}`;
  document.getElementById("valor_final").textContent = `R$ ${valorFinal.toFixed(2)}`;

  
  const confirmado = confirm(`Valor final da venda: R$ ${valorFinal.toFixed(2)}\nDeseja confirmar a operação?`);

  const statusEl = document.getElementById("status_venda");
  if (confirmado) {
    statusEl.textContent = "✅ Venda realizada com sucesso!";
    statusEl.style.color = "var(--cor-secundaria)"; 
  } else {
    statusEl.textContent = "❌ Venda cancelada.";
    statusEl.style.color = "red";
  }
});
