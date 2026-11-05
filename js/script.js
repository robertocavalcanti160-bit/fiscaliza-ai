// Validação do formulário de denúncia
const formulario = document.getElementById("form-denuncia");
const aviso = document.getElementById("aviso");

formulario.addEventListener("submit", function (evento) {
  // Impede o envio padrão para conferir os campos primeiro
  evento.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const categoria = document.getElementById("categoria").value;
  const endereco = document.getElementById("endereco").value.trim();
  const descricao = document.getElementById("descricao").value.trim();

  if (nome === "" || categoria === "" || endereco === "" || descricao === "") {
    // Algum campo está vazio: mostra o aviso e continua na página
    aviso.classList.remove("d-none");
  } else {
    // Tudo preenchido: abre a página de confirmação
    window.location.href = "obrigado.html";
  }
});
