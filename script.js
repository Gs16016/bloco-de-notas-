function salvarNota() {
  const nota = document.getElementById("note").value;
  localStorage.setItem("minhaNota", nota);
  document.getElementById("status").textContent = "✔️ Nota salva com sucesso!";
}

// Carrega a nota salva ao abrir
window.onload = () => {
  const notaSalva = localStorage.getItem("minhaNota");
  if (notaSalva) {
    document.getElementById("note").value = notaSalva;
  }
};
