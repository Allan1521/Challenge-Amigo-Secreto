//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = []; /* Criei aqui uma Array p/armazenar os nomes dos amigo */

function adicionarAmigo() { /* Função para adicionar um amigo à lista */
  const amigoInput = document.getElementById("amigo");
  const nomeAmigo = amigoInput.value.trim().toUpperCase(); /* Para converter p/maiúsculas */

  if (nomeAmigo !== "") {
    amigos.push(nomeAmigo);
    atualizarListaAmigos();
    amigoInput.value = "";
    amigoInput.focus();
  }
}
/* Função para atualizar a lista de Amigos na tela */
function atualizarListaAmigos() {
  const listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = ""; /* Limpa a lista anterior */

  amigos.forEach((amigo) => {
    const li = document.createElement("li");
    li.textContent = amigo;
    listaAmigos.appendChild(li);
  });
  // Adiciona ou remove a classe 'lista-nomes-container-cheio' com base no estado da lista
  const listaNomesContainer = document.getElementById("listaNomesContainer");
  if (amigos.length > 0) {
      listaNomesContainer.classList.add("lista-nomes-container-cheio");
  } else {
      listaNomesContainer.classList.remove("lista-nomes-container-cheio");
  }
} /* Função Sortear Amigo com retorno de mensagem no alert */
function sortearAmigo() {
  if (amigos.length < 2) {
    alert("Adicione pelo menos dois amigos para o sorteio.");
    return;
  }
  const amigosEmbaralhados = [...amigos];
  embaralharArray(amigosEmbaralhados);

  const resultado = document.getElementById("resultado");
  resultado.innerHTML = "";

  for (let i = 0; i < amigos.length; i++) {
    const amigoAtual = amigos[i];
    const amigoSorteado = amigosEmbaralhados[i];

    const li = document.createElement("li");
    li.textContent = `${amigoAtual} tirou ${amigoSorteado}`;
    resultado.appendChild(li);
  }
}

function embaralharArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

document.addEventListener('keydown', function(event) {
    if(event.key === 'Enter'){
        if(document.activeElement === document.getElementById('amigo')){
            adicionarAmigo();
        }
    }
});
function reiniciarSorteio() {
    amigos = []; // Limpa o array de amigos
    atualizarListaAmigos(); // Atualiza a lista de amigos na tela
    document.getElementById("resultado").innerHTML = ""; // Limpa o resultado do sorteio
}
