// Array para armazenar os convidados
let convidados = [];

// Seleciona elementos
const inputNome = document.getElementById("nomeConvidado");
const btnAdicionar = document.getElementById("btnAdicionar");
const listaConvidados = document.getElementById("listaConvidados");
const totalConvidados = document.getElementById("totalConvidados");

// Função para atualizar a lista
function atualizarLista() {
  // Ordena alfabeticamente
  convidados.sort((a, b) => a.localeCompare(b));

  // Limpa lista antes de recriar
  listaConvidados.innerHTML = "";

  // Cria itens da lista
  convidados.forEach(nome => {
    let item = document.createElement("li");
    item.textContent = nome;
    listaConvidados.appendChild(item);
  });

  // Atualiza total
  totalConvidados.textContent = `Total de convidados: ${convidados.length}`;
}

// Evento de clique para adicionar convidado
btnAdicionar.addEventListener("click", function() {
  let nome = inputNome.value.trim();

  if (nome) {
    convidados.push(nome);
    atualizarLista();
    inputNome.value = "";
    inputNome.focus();
  } else {
    alert("Digite um nome válido!");
  }
});
